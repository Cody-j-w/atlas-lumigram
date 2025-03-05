import { db } from "@/firebaseConfig";
import { addDoc, collection, DocumentData, getDocs, query, QueryDocumentSnapshot } from "firebase/firestore";

type Post = {
    caption: string;
    image: string;
    createdAt: Date;
    createdBy: string;
}

const posts = collection(db, "posts");

async function addPost(post: Post) {
    await addDoc(posts, post);
}

async function getHome() {
    const res: Array<Post> = [];
    const q = query(posts);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const docData = doc.data();
        const docCaption = docData.caption;
        const docImage = docData.image;
        const docCreatedAt = docData.createdAt;
        const docCreatedBy = docData.createdBy;
        res.push({ caption: docCaption, image: docImage, createdAt: docCreatedAt, createdBy: docCreatedBy });
    });
    return res;
}

export default {
    addPost, getHome
}