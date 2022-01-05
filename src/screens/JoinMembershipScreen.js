import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { joinMembership } from "../actions/userActions";

const JoinMembershipScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");

  const dispatch = useDispatch();

  const onNext = (event) => {
    dispatch(joinMembership(email, password, username, accountname));
  };

  return (
    <>
      <div>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <div>
        <input
          name="username"
          type="text"
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </div>
      <div>
        <input
          name="accountname"
          type="text"
          placeholder="계정ID"
          value={accountname}
          onChange={(e) => setAccountname(e.currentTarget.value)}
        />
      </div>

      <div>
        <button type="button" onClick={onNext}>
          다음
        </button>
      </div>
    </>
  );
};

export default JoinMembershipScreen;
