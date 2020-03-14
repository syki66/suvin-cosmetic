import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import Markdown from "react-markdown";

import { HashRouter, Route, Link, Switch } from "react-router-dom";


/*
    posts 폴더 전체를 임포트 시켜서 각 md파일의 내용을 fetch 이용해서 가져와서 state의 posts 어레이에 저장함
    그후 render에서 posts 어레이 이용해서 규격에 넣어서 화면상에 출력
    escapeHTML은 false로 두면 html 사용 가능해짐
    댓글 디스커스 쓸수있게 해야겠다.
    front matter는 아래형식에 맞춰서 date와 title 집어넣어줘야됨(순서는 상관없음). 띄어쓰기와 오타 주의 글의 시작은 front matter 와 한칸 띄워서 시작하기
    비동기에 있어서 isLoading 은 필수, front matter에 disqus 추가할지 정하는거추가
*/


/*  마크다운 front matter 형식
    ---
    date: "2020-03-12"
    title: "제목입니다."
    ---
    여기서부터 글 시작
*/

// const importAll = (r) => r.keys().map(r);
// const markdownFiles = importAll(require.context('./posts', false, /\.md$/)).sort().reverse();

import source from './posts/2020-03-12-test.txt';

export default class Notice extends React.Component {

    state = {
        
        post: null
    }




    // front matter 뽑아서 (날짜, 타이틀, 내용) 객체로 리턴해주는 함수
    // sliceFrontMatter = (text, index) => {
    //     const parsedText = text.substring(text.indexOf("---")+5, text.indexOf("---", 3)-2);
        
    //     const date = parsedText.substring(parsedText.indexOf('date: "')+7, parsedText.indexOf('"' , parsedText.indexOf('date: "')+10) );
    //     const title = parsedText.substring(parsedText.indexOf('title: "')+8, parsedText.indexOf('"' , parsedText.indexOf('title: "')+10) );
    //     const mainText = text.substr(text.indexOf("---", 3)+5);

    //     return { index, date, title, mainText }
    // }



    componentDidMount() {
        fetch("https://raw.githubusercontent.com/syki66/suvin-cosmetic/master/src/posts/2020-03-12-test.md")
          .then(res => res.text())
          .then(post => this.setState((state) => ({ ...state, post })))
          .catch((err) => console.error(err));

          console.log("abcef");
      }




    render() {


        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >

               
                                        
                <Markdown
                    source={this.state.post}
                    escapeHtml={false}
                />


            </InnerPageFrame>
        );
    }
}