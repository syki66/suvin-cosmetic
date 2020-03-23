# 수빈코스메틱 홈페이지 유투브 iframe 오른쪽 패딩값 수식

#설정하고 싶은 오른쪽 패딩값
rightPadding = 72

for i in range(1000):
    j = i / 100
    print( "가로 창크기가", 1200+i, "px 일때 : ",  ( (50*j) + rightPadding ) / (j + 12) , "vw" )
