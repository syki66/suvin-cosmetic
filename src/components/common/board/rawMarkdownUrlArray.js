const rawMarkdownUrlArray = (path) => {

    const RawMarkdownUrl = `https://raw.githubusercontent.com/syki66/suvin-cosmetic/master/src/markdowns/${path}`;
    
    //제목만 가져오기
    const importAll = (r) => r.keys().map(r);
    const markdownFolder = importAll(require.context('../../../markdowns/products/premium/', false, /\.md$/)).sort().reverse();
    
    //마크다운 이름 다듬기
    const trimedmarkdownName = markdownFolder.map((eachMD) => {
        return eachMD.substring(eachMD.indexOf("media")+6, eachMD.indexOf("."));
    })
    
    // 깃허브 레포 raw 파일에 연결
    return trimedmarkdownName.map((each) => {
        return `${RawMarkdownUrl}/${each}.md`
    })
    
}

export default rawMarkdownUrlArray;