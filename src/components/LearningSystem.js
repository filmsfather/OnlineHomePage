import styles from './LearningSystem.module.css';

export default function LearningSystem() {
    return (
        <section id="system" className={`section ${styles.system}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.textContent}>
                        <h2 className="title-md">
                            학습·전략·기억을 모두 설계한<br />
                            <span style={{ color: 'var(--accent)' }}>6-Step 영화입시 시스템</span>
                        </h2>
                        <p className="text-lg mb-2">
                            우디캠퍼스 온라인은 단순히 강의만 듣는 곳이 아닙니다.<br />
                            6가지 핵심 과제를 통해 입시에 필요한 모든 역량을 기릅니다.
                        </p>
                    </div>

                    <div className={styles.sixStepGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepLabel}>A</span>
                                <h3 className={styles.stepTitle}>암기</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                이해의 시작은 암기<br />
                                핵심 개념은 반복학습 시스템(SRS)을 통해 완전 암기.<br />
                                기초를 다지고, 그 위에 사고를 쌓는다.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepLabel}>B</span>
                                <h3 className={styles.stepTitle}>작법</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                잘 쓴 글을 보며 더 나은 글을 쓴다<br />
                                PDF 제출로 자동 아카이빙.<br />
                                선생님이 선별한 우수작을 확인하며 타 사례를 학습하고 방향에 맞게 성장한다.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepLabel}>C</span>
                                <h3 className={styles.stepTitle}>연구</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                기록하는 감상, 쌓이는 시선<br />
                                매주 일정 분량 이상의 영화 감상 기록을 남기고 감상평을 통해 비평적 시선을 기른다.<br />
                                축적된 기록은 실기 면접과 작품 구상에 적극 활용.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepLabel}>D</span>
                                <h3 className={styles.stepTitle}>시험</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                스스로의 빈틈을 점검하고, 완성도를 높인다<br />
                                정기 테스트로 내가 확실하게 아는 것들을 확인하고,<br />
                                빈틈 보완과 성장을 도모한다.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepLabel}>E</span>
                                <h3 className={styles.stepTitle}>인터넷 강의 시청</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                배움의 확장은 교실 밖에서도 이어진다.<br />
                                다양한 특강과 강의 링크를 시청하며 제공되는 과제를 제출한다.<br />
                                우디쌤 학원의 강점을 살린 과제.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepLabel}>F</span>
                                <h3 className={styles.stepTitle}>서술형</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                생각하고 정리하는 힘<br />
                                심화단계의 서술형 과제.<br />
                                종합적 이해 평가를 위한 문제를 풀어보고, 선생님의 코멘트를 기록하는 궁극의 과제
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.dataSection}>
                    <div className={styles.programHeader}>
                        <h2 className={styles.programTitle}>영화입시최초, 전문 교육 프로그램 제작</h2>
                        <p className={styles.programIntro}>
                            우리는 다년간의 합격 노하우를 모아 학생이 동기부여되고 스스로 학습하게 하는 프로그램을 만들었습니다.<br />
                            모든 학습을 기록·분석·관리하는 시스템을 통해 성장의 흐름을 한눈에 제시하며,<br />
                            2026년, 우리는 학생의 성장을 예측 가능한 결과로 만드는 교육을 완성합니다.
                        </p>
                    </div>

                    <div className={styles.programList}>
                        <div className={styles.programItem}>
                            <div className={styles.itemHeader}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3 className={styles.itemTitle}>매 달 학습일지 제공</h3>
                            </div>
                            <div className={styles.quote}>"이번 달, 나는 무엇을 배우고 어떤 성장을 했을까?"</div>
                            <p className={styles.itemDesc}>
                                우디캠퍼스는 매달 학생 개인의 학습 과정을 데이터로 기록한 전국 최초의 월간 학습 리포트를 발간합니다.<br />
                                4개 전공 수업과 그에 따른 과제 이력, 학습 내역을 한눈에 파악할 수 있으며<br />
                                학생이 '단순 수행'을 넘어 성장의 방향을 발견하도록 설계되어 있습니다.
                            </p>
                        </div>

                        <div className={styles.programItem}>
                            <div className={styles.itemHeader}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3 className={styles.itemTitle}>연간 일정</h3>
                            </div>
                            <p className={styles.itemDesc}>
                                매번 같은 과제, 같은 피드백이 아닙니다. 우디쌤의 수업은 매주 새롭게 진화합니다.<br />
                                학원의 모든 학습은 연간 커리큘럼을 기준으로 설계되며, 학생은 매달 제공되는 월간 학습 계획표를 통해<br />
                                지금 내가 어느 단계에 있는지 명확히 인식할 수 있습니다.<br />
                                과거 리포트와 유인물은 언제든지 무제한 다운로드 가능, 배운 것을 다시 복습하며, 놓친 지식을 빈틈없이 채워갑니다.
                            </p>
                        </div>

                        <div className={styles.programItem}>
                            <div className={styles.itemHeader}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3 className={styles.itemTitle}>매달 확인하는 선생님 피드백</h3>
                            </div>
                            <div className={styles.quote}>"콕 짚는 평가, 따뜻한 격려." 그 두 가지가 함께 있을 때 학생은 성장합니다.</div>
                            <p className={styles.itemDesc}>
                                한 번의 말로는 다 전해지지 않던 피드백, 이제는 매달 코멘트 섹션에서 기록으로 남습니다.<br />
                                각 과목 담당 선생님이 직접 작성하는 맞춤형 피드백 코멘트를 통해 나의 약점은 구체적으로, 강점은 더 선명하게 파악합니다.<br />
                                이로써 한 영역에 치우치지 않고, 스토리텔링·이론·시네필 감수성·철학을 고루 갖춘 '육각형 학생'을 만들어갑니다.
                            </p>
                        </div>

                        <div className={styles.programItem}>
                            <div className={styles.itemHeader}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3 className={styles.itemTitle}>성적 산출 프로그램</h3>
                            </div>
                            <p className={styles.itemDesc}>
                                우디캠퍼스는 학생 개개인의 내신 성적을 분석해 합격 안정권 대학과<br />
                                가장 유리한 지원 전략을 자동으로 산출하는 전용 입시 분석 프로그램을 도입했습니다.<br />
                                데이터 기반 예측을 통해 학생은 자신에게 가장 적합한 대학과 그에 맞춘 대비 전략을 명확히 세울 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
