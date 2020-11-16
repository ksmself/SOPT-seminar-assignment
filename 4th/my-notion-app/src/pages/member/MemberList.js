import "./MemberList.scss";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

import { getMembersAPI } from "../../lib/api/memberAPI";

// redux 사용
import { setMembersToStore } from "../../modules/member";
import { useDispatch } from "react-redux";

function MemberList({ history, match }) {
  // members 데이터 관리
  const [members, setMembers] = useState([]);

  // 로딩 처리
  const [isLoad, setIsLoad] = useState(false);

  // action dispatch 정의
  const dispatch = useDispatch();
  const saveMembersToStore = (data) => dispatch(setMembersToStore(data));

  // mounted
  useEffect(() => {
    (async () => {
      const { data } = await getMembersAPI();
      setMembers(data); // [{}, {}, ...]
      setIsLoad(true);
      // store에 저장
      saveMembersToStore(data);
    })();
  }, []);

  const removeCard = (evt) => {
    evt.stopPropagation();
    console.log("REMOVE CARD!!");
  };

  switch (isLoad) {
    case true:
      return <Loading />;
    default:
      return (
        <div className="member-list">
          <div className="member-list__title">파트원 소개</div>
          <div className="member-list__header member-list-header">
            <div className="member-list-header__nav">Gallery View</div>
            <div className="member-list-header__empty"></div>
            <Button text="Properties" textColor="#777"></Button>
            <Button text="Filter" textColor="#777"></Button>
            <Button text="Sort" textColor="#777"></Button>
            <Button text="Search" textColor="#777" icon="search"></Button>
            <Button text="..." textColor="#777"></Button>
          </div>
          <hr />
          {!isLoad ? (
            <Loading margin="30px" />
          ) : (
            <div className="member-list-content-wrapper">
              {members.map((member, i) => (
                <Card
                  key={"card-" + i}
                  route={{ history, match }}
                  memberData={member}
                  onRemoveCard={removeCard}
                />
              ))}
            </div>
          )}
        </div>
      );
  }
}

export default MemberList;
