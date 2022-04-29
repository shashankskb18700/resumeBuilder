import React, { useState, useEffect } from "react";
import Header from "../HeaderFooter/Header/Header";
import { dbService } from "../../firebase/fbase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import ResCreator from "../ResCreator/ResCreator";
import { fetchForm } from "../../redux/action/index";

import "./ResTemplatePage.css";

const ResTemplatePage = (props) => {
  const [tempArr, setTempArr] = useState([]);
  const { onSnapshot, collection } = dbService;
  useEffect(async () => {
    const testing = await dbService.query(
      collection(dbService.getFirestore(), "formTemp")
    );

    await onSnapshot(testing, (snapshot) => {
      const arr = snapshot.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));
      console.log(arr);
      setTempArr(arr);
    });
  }, []);

  // const onClick = async (a) => {
  //   console.log(a);
  //   const testing = await dbService.query(
  //     collection(dbService.getFirestore(), a.id)
  //   );

  //   await onSnapshot(testing, (snapshot) => {
  //     const arr = snapshot.docs.map((docs) => ({
  //       id: docs.id,
  //       ...docs.data(),
  //     }));
  //     console.log(arr);
  //     setTempArr(arr);
  //   });
  // };

  console.log(fetchForm);
  console.log(props);
  return (
    <div>
      <Header />
      <div className="tempArsenal">
        {tempArr.map((a) => (
          <Link to="/creator">
            <img src={a.value} onClick={() => props.fetchForm(a)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state };
};
export default connect(mapStateToProps, { fetchForm })(ResTemplatePage);
