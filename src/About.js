import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 '?'를 생략
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열

  return (
    <div>
      <h1>About</h1>
      <p>this project is about react router.</p>
      {showDetail && <p>detail 값은 true</p>}
    </div>
  );
};

export default About;
