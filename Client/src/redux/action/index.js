import { collection, onSnapshot } from "firebase/firestore";
import { dbService } from "../../firebase/fbase";

export const fetchForm = (a) => {
  return async function (dispatch, getState) {
    const { collection, onSnapshot } = dbService;
    const testing = await dbService.query(
      collection(dbService.getFirestore(), a.id)
    );
    let dataObj;
    await onSnapshot(testing, (snapshot) => {
      const arr = snapshot.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));
      console.log(arr);
      dataObj = arr;
      dispatch({ type: "FETCH_FORM", payload: arr[0] });
    });
  };
};
