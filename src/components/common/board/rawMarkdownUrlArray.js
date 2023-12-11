/*
    isMain 을 써서 home 화면에는 3개만 출력되도록 했고, 함수 두개로 분리시켜서 총 마크다운의 길이도 리턴해줄수 있도록 했음(디스커스 댓글 내용 공유때문에 url이 똑같아야되서)
*/


const rawMarkdownUrlArray = (path) => {
    const rawMarkdownUrl = `https://suvincos.com/static/media/${path}`;

    //제목만 가져오기
    const importAll = (r) => r.keys().map(r);
    const markdownFolder = importAll(require.context("../../../markdowns/", true, /\.md$/)).sort().reverse();
    
    // 경로에 맞는 마크다운만 선별하기
    const classifiedMDFolder = markdownFolder.filter((each) => {
        return each.indexOf(`.${path}`) !== -1;
    })

    //마크다운 이름 다듬기
    const trimedmarkdownName = classifiedMDFolder.map((eachMD) => {
        return eachMD.substring(eachMD.indexOf("media")+6, eachMD.indexOf("."));
    })
    
    // 깃허브 레포 raw 파일에 연결
    return trimedmarkdownName.map((each) => {
        return `${rawMarkdownUrl}/${each}.${path}.md`
    })

}

const rawMarkdownUrlArrayBroker = (path, isMain) => {
    return (isMain) ? (rawMarkdownUrlArray(path).slice(0,3)) : (rawMarkdownUrlArray(path))
}

export {rawMarkdownUrlArray, rawMarkdownUrlArrayBroker};