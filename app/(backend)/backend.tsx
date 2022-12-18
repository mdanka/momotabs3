import * as admin from "firebase-admin";

if (admin.apps.length === 0) {
    admin.initializeApp();
}

export enum CollectionId {
    SONGS = "songs"
}

export interface ISongFirestore {
    artist: string;
    title: string;
    content: string;
    creationTime: admin.firestore.Timestamp;
    creatorUserId: string;
}

export interface ISong {
    artist: string;
    title: string;
    content: string;
    creationTime: Date;
    creatorUserId: string;
}

const songConverter = {
    toFirestore(song: ISong): ISongFirestore {
      return { ...song, creationTime: admin.firestore.Timestamp.fromDate(song.creationTime) };
    },
    fromFirestore(
      snapshot: admin.firestore.QueryDocumentSnapshot<ISongFirestore>,
    ): ISong {
      const data = snapshot.data();
      return { ...data, creationTime: data.creationTime.toDate() } as ISong;
    }
};

export const getSong = async (songId: string) => {
    const doc = await admin.firestore().collection(CollectionId.SONGS).withConverter(songConverter).doc(songId).get();
    return doc.data();
}
