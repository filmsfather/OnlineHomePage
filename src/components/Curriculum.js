import styles from './Curriculum.module.css';

export default function Curriculum() {
    const curriculumData = [
        { week: "1주차", theory: "작법의 이해1\n(이야기의 필요부터 인물 설정)", directing: "연출이론1\n(영화란 무엇인가? 영화의 기본 단위)", writing: "영화적 스토리텔링\n[이야기 3요소]", research: "주요 일본 감독\n작품관 및 연출 스타일에 대한 탐구" },
        { week: "2주차", theory: "작법의 이해2\n(플롯의 이해)", directing: "연출이론2\n(샷의 종류)", writing: "캐릭터 만들기\n(세계관 만들기)", research: "주요 러시아 감독\n작품관 및 연출 스타일 탐구" },
        { week: "3주차", theory: "작법의 이해3\n(장르의 이해)", directing: "연출이론3\n(샷의 깊이와 프레이밍 미장센 활용)", writing: "시각화, 장면화\n(언어적 비언어적 표현)", research: "주요 북유럽 및 동유럽 감독\n작품관 및 연출 스타일 탐구" },
        { week: "4주차", theory: "작법의 이해4\n(장면구성과 아이러니)", directing: "연출이론4\n(구도 화면비)", writing: "오프닝만들기\n(기출 제시문 분석)", research: "주요 동유럽 및 서유럽 감독\n작품관 및 연출 스타일 탐구" },
        { week: "5주차", theory: "연출의 이해1\n(연출이란 무엇인가부터 구도)", directing: "시험\n[연출/이미지 분석]", writing: "이미지 스토리텔링\n(합격작 분석)", research: "독일 표현주의 및 이탈리아\n네오리얼리즘 시대의 감독들을 살펴보기" },
        { week: "6주차", theory: "연출의 이해2\n(촬영,편집,음향,미술)", directing: "촬영이론1\n(카메라 무브먼트/장비)", writing: "기출 풀이1\n(영화적 글쓰기)", research: "프랑스 누벨바그 및\n뉴 아메리칸 시네마 시대의 감독들 살펴보기" },
        { week: "7주차", theory: "연출의 이해3\n(작가주의와 나만의 색)", directing: "촬영이론2\n(노출/피사계심도 렌즈/필터 고속/저속)", writing: "기출 풀이2\n(심화 스토리텔링)", research: "주요 중국, 대만, 홍콩 감독\n작품관 및 연출 스타일 탐구" },
        { week: "8주차", theory: "연출의 이해4\n(개별연구를 위한준비)", directing: "편집이론1\n(편집의역사 연속/불연속)", writing: "기출 풀이3\n(중심사건 만들기 [매력적인 충돌])", research: "주요 멕시코, 이란, 태국,\n동남아시아 감독 작품관 및 연출 스타일 탐구" },
        { week: "9주차", theory: "개인별 연구과정1", directing: "편집이론2\n(장면전환 및 기타 편집 기법)", writing: "기출 풀이4\n(메타포,상징,알레고리)", research: "주요 프랑스 감독\n작품관 및 연출 스타일 탐구" },
        { week: "10주차", theory: "개인별 연구과정2", directing: "조명이론1\n(조명의 역할 / 종류)", writing: "합격작 분석1\n(암시와 복선)", research: "주요 프랑스 감독\n작품관 및 연출 스타일 탐구2" },
        { week: "11주차", theory: "개인별 연구과정3", directing: "조명이론2\n(조명의 활용과 장비 화이트 밸런스/색온도)", writing: "합격작 분석2\n(글의 스타일 같은 소재, 다양한 표현)", research: "주요 미국,영국,캐나다 감독\n작품관 및 연출 스타일에 대한 탐구" },
        { week: "12주차", theory: "개인별 연구과정4", directing: "음향이론\n(음향의 3요소 음향기법/음향의 활용)", writing: "합격작 분석3\n(한정된 공간에서 벌어지는 이야기)", research: "주요 한국 감독\n작품관 및 연출 스타일에 대한 탐구" },
    ];

    return (
        <section className={`section ${styles.curriculum}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>4개의 전공과목, 전방위적 예술 교육</h2>
                    <div className={styles.subtitle}>정규반 커리큘럼</div>
                    <p className={styles.note}>
                        커리큘럼은 학생의 수준과 진행 상황에 따라 더 효과적인 방향으로 유연하게 조정될 수 있습니다.
                    </p>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.weekCol}>주차</th>
                                <th>통합이론</th>
                                <th>연출론</th>
                                <th>작법론</th>
                                <th>영화연구</th>
                            </tr>
                        </thead>
                        <tbody>
                            {curriculumData.map((row, index) => (
                                <tr key={index}>
                                    <td className={styles.weekCol}>{row.week}</td>
                                    <td>{row.theory.split('\n').map((line, i) => <div key={i}>{line}</div>)}</td>
                                    <td>{row.directing.split('\n').map((line, i) => <div key={i}>{line}</div>)}</td>
                                    <td>{row.writing.split('\n').map((line, i) => <div key={i}>{line}</div>)}</td>
                                    <td>{row.research.split('\n').map((line, i) => <div key={i}>{line}</div>)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
