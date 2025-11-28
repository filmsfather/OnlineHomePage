import styles from './About.module.css';

export default function About() {
    return (
        <section className={`section ${styles.about}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.subTitle}>About WOODiEFILM</span>
                    <h2 className={styles.mainTitle}>
                        학생 한 명의 가능성이<br />
                        영화라는 언어로 자라도록 돕는 학교
                    </h2>

                    <div className={styles.description}>
                        <p className="mb-1">
                            우디쌤 영화입시학원은 2021년 개원 이후, 영화과 입시의 흐름을 실제로 바꾸어낸 새로운 교육 모델을 만들어왔습니다.
                            학생이 10명에 불과하던 시절부터 우리는 '영화계의 가장 튼튼한 새싹을 기른다'는 단 하나의 목표로,
                            누구나 영화를 만들고, 스스로 사고하며, 확신을 갖고 시험장에 들어갈 수 있는 환경을 구축해왔습니다.
                        </p>
                        <p className="mb-1">
                            지난 5년간 50편 이상의 학생 영화 제작, 100개 이상의 합격 복기 아카이브,
                            연출·작법·영화연구·통합이론을 아우르는 전공별 전문 교육, 그리고 데이터 기반으로 설계된 1년 커리큘럼을 통해
                            우리는 수많은 영화과 합격생을 배출하며 교육의 수준을 높였습니다.
                        </p>
                        <p>
                            우디쌤 영화입시학원은 '감'이 아닌 '근거'로, '운'이 아닌 '준비된 실력'으로,
                            학생 한 명 한 명이 자신의 영화 세계를 만들어갈 수 있도록 돕습니다.<br />
                            2026년, 우리는 영화과 입시 교육의 새로운 기준을 세우는 학교로 계속 나아갑니다.
                        </p>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.checkIcon}>✓</div>
                        <h3 className={styles.cardTitle}>영화 제작 기반의 '실전형 교육 시스템'</h3>
                        <p className={styles.cardDesc}>
                            단순 이론 교육이 아니라 학생이 직접 영화(장면, 연출, 스토리)를 만들면서 성장하는 구조
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.checkIcon}>✓</div>
                        <h3 className={styles.cardTitle}>100개 이상의 '합격 데이터 아카이브' 기반 교육</h3>
                        <p className={styles.cardDesc}>
                            지난 학생들의 합격 복기, 대학별 문제 유형&경향 자료를 축적한 시험 직전대비
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.checkIcon}>✓</div>
                        <h3 className={styles.cardTitle}>입시를 넘어 '영화인으로서의 철학·시선·태도'를 기르는 교육</h3>
                        <p className={styles.cardDesc}>
                            단순 문제풀이, 암기가 아니라 학생의 시선·삶·태도·세계관을 확장시키는 교육
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.checkIcon}>✓</div>
                        <h3 className={styles.cardTitle}>1년을 관통하는 '완성형 커리큘럼 + 성장 시스템'</h3>
                        <p className={styles.cardDesc}>
                            기초 정규과정 → 심화 → 대학별 대비 → 직전대비로 이어지는 완성형 루트<br />
                            1년 안에 영화과 합격 실력으로 성장하도록 구조화
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
