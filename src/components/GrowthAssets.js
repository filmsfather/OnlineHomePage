import styles from './GrowthAssets.module.css';
import ScrollAnimation from './ScrollAnimation';

export default function GrowthAssets() {
    return (
        <section className={`section ${styles.assets}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <ScrollAnimation animation="fadeInUp">
                        <h2 className={styles.title}>우디캠퍼스의 3대 성장 자산</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fadeInUp" delay={0.2}>
                        <p className={styles.intro}>
                            학생이 영화를 '만들어보고', '합격의 길을 이해하고', '영화를 깊게 생각할 수 있도록'<br />
                            우리는 실전 창작, 합격 데이터, 깊이 있는 영화 지식이라는 세 가지 축을 축적해왔습니다.<br />
                            이 세 가지는 단순한 입시생이 아니라 영화를 다룰 수 있는 사람으로 만드는 핵심 토대입니다.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className={styles.list}>
                    <ScrollAnimation animation="fadeInUp" delay={0.3}>
                        <div className={styles.item}>
                            <div className={styles.itemHeader}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3 className={styles.itemTitle}>50편 이상의 영화 제작</h3>
                            </div>
                            <div className={styles.itemContent}>
                                <p className={styles.mainDesc}>
                                    학생이 10명이었을 때부터 우리는 '영화계의 가장 튼튼한 새싹'을 기르기 위해<br />
                                    흔들림 없이 한 길만 걸어왔습니다.
                                </p>
                                <p className={styles.subDesc}>
                                    그 첫 번째 걸음은, 누구나 자신의 영화를 만들 수 있는 환경을 만드는 것이었습니다.<br />
                                    장비, 커리큘럼, 멘토링, 스텝 협업까지.<br />
                                    영화를 만들어본 적 없는 학생도 '나만의 첫 연출작'을 완성할 수 있도록 모든 과정을 정교하게 준비해왔습니다.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.5}>
                        <div className={styles.item}>
                            <div className={styles.itemHeader}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3 className={styles.itemTitle}>100개 이상의 합격 복기 아카이브</h3>
                            </div>
                            <div className={styles.itemContent}>
                                <p className={styles.mainDesc}>
                                    지난 4년간, 우리는 100개가 넘는 합격생 복기 기록을 축적했습니다.
                                </p>
                                <p className={styles.subDesc}>
                                    학생 한 명 한 명이 어떤 강점을 통해 합격에 도달했는지, 어떤 준비가 결정적이었는지,<br />
                                    어떤 실수는 조심해야 하는지를 실제 합격자의 언어로 생생하게 담아냈습니다.<br />
                                    이 복기 아카이브는 지금도 모든 학생들의 나침반이 되어,<br />
                                    "어디에서 시작하든, 어떻게 준비해야 확실히 도달하는지"를 알려주는<br />
                                    가장 현실적이고 가장 강력한 로드맵입니다.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.7}>
                        <div className={styles.item}>
                            <div className={styles.itemHeader}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3 className={styles.itemTitle}>100권 이상의 전문서적 확보</h3>
                            </div>
                            <div className={styles.itemContent}>
                                <p className={styles.mainDesc}>
                                    우리는 학생들이 '좋아하는 영화'를 넘어서<br />
                                    영화를 깊게 이해하고, 스스로 사고할 수 있는 힘을 갖추도록 돕기 위해<br />
                                    개원 초창기부터 꾸준히 영화 전문 서적을 확보해왔습니다.
                                </p>
                                <p className={styles.subDesc}>
                                    연출, 시나리오, 영화언어, 영화이론, 촬영·조명, 편집, 비평까지—100권이 넘는 이 책들은 단순한 자료가 아니라<br />
                                    학생들이 자신만의 영화 세계를 넓히고 깊이를 만들어가는 토대가 됩니다.<br />
                                    서적 아카이브는 지금도 모든 학생들에게 열려 있으며, 각자의 속도로 읽고 배우며,<br />
                                    '영화과 입시를 준비하는 학생'에서 '영화를 생각하는 사람'으로 성장하도록 돕는 든든한 영화적 기반입니다.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
