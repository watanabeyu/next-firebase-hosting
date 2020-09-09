import firebase from 'app/src/firebase';

type ApiHogeListParams = {
  cursor?: firebase.firestore.QueryDocumentSnapshot,
  limit?: number
}

type ApiHogeListResponse = Promise<[
  Hoge[],
  firebase.firestore.QueryDocumentSnapshot
]>

export const list = async (params?: ApiHogeListParams): ApiHogeListResponse => {
  let query = firebase.firestore().collection('hoge').orderBy('createdAt', 'desc');

  if (params?.cursor) {
    query = query.startAfter(params.cursor);
  }

  if (!params?.limit) {
    query = query.limit(100);
  } else if (params.limit !== -1) {
    query = query.limit(params.limit);
  }

  const result = await query.get();

  const data: Hoge[] = result.docs.map((doc) => {
    const item = doc.data() as HogeDocument;

    return {
      id: doc.id,
      name: item.name,
      description: item.description,
      img: item.img,
    };
  });

  return [data, result.docs[result.docs.length - 1]];
};

type ApiHogeDetailParams = {
  id: string,
}

type ApiHogeDetailResponse = Promise<Hoge>

export const detail = async (params: ApiHogeDetailParams): ApiHogeDetailResponse => {
  const result = await firebase.firestore().collection('hoge').doc(params.id).get();

  if (!result.exists) {
    throw new Error('instructor not found');
  }

  const data = result.data() as HogeDocument;

  return {
    id: result.id,
    name: data.name,
    description: data.description,
    img: data.img,
  };
};
