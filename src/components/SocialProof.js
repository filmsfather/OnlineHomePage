import styles from './SocialProof.module.css';

export default function SocialProof() {
    return (
        <section id="achievements" className={`section ${styles.socialProof}`}>
            <div className="container">
                <div className={styles.highlight}>
                    <span className={styles.crownBadge}>합격생이 증명한 실력</span>
                    <h2 className="title-md">
                        우리는 준비된 실력으로<br />
                        영화과 합격의 길을 만드는 교육을 합니다
                    </h2>
                </div>

                <div className={styles.multiCrownSection}>
                    <h3 className={styles.sectionTitle}>2025년 다관왕</h3>
                    <div className={styles.crownGrid}>
                        <div className={styles.crownCard}>
                            <div className={styles.crownTitle}>6관왕</div>
                            <div className={styles.crownName}>류태영</div>
                            <div className={styles.crownDesc}>세종대, 서울예대, 서경대, 수원대,<br />동아방송예대, 서일대 합격</div>
                        </div>
                        <div className={styles.crownCard}>
                            <div className={styles.crownTitle}>4관왕</div>
                            <div className={styles.crownName}>하정성</div>
                            <div className={styles.crownDesc}>한예종, 국민대, 동국대,<br />상명대 합격</div>
                        </div>
                        <div className={styles.crownCard}>
                            <div className={styles.crownTitle}>3관왕</div>
                            <div className={styles.crownName}>강은서, 강하니, 허성혁</div>
                            <div className={styles.crownDesc}>서울예대, 동아방송예대, 중부대 등 합격</div>
                        </div>
                        <div className={styles.crownCard}>
                            <div className={styles.crownTitle}>2관왕</div>
                            <div className={styles.crownName}>이준서, 신채영, 이정원, 심재용, 민채희, 최성우, 김태완, 정다은, 양시아</div>
                            <div className={styles.crownDesc}>서경대, 성결대, 국민대, 단국대 등 합격</div>
                        </div>
                    </div>
                </div>

                <div className={styles.schoolListSection}>
                    <h3 className={styles.sectionTitle}>대학별 합격자 명단</h3>
                    <div className={styles.schoolGrid}>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>한국예술종합학교</div>
                            <div className={styles.studentName}>영상원 영화과 합격 하정성</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>국민대학교</div>
                            <div className={styles.studentName}>공연예술학부 영화전공 합격 신채영</div>
                            <div className={styles.studentName}>공연예술학부 영화전공 합격 하정성</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>숭실대학교</div>
                            <div className={styles.studentName}>영화예술전공 합격 윤고은</div>
                            <div className={styles.studentName}>영화예술전공 합격 손지완</div>
                            <div className={styles.studentName}>영화예술전공 합격 함형준</div>
                            <div className={styles.studentName}>영화예술전공 합격 최다미</div>
                            <div className={styles.studentName}>영화예술전공 합격 이준서</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>세종대학교</div>
                            <div className={styles.studentName}>영화예술학과 합격 김현래</div>
                            <div className={styles.studentName}>영화예술학과 합격 구경모</div>
                            <div className={styles.studentName}>영화예술학과 합격 류태영</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>동국대학교</div>
                            <div className={styles.studentName}>예술대학 영화영상학과 합격 하정성</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>서울예술대학교</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 류태영</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 조지혜</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 이정원</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 진소민</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 이준서</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 허성혁</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 박하은</div>
                            <div className={styles.studentName}>영상학부 영화전공 합격 강은서</div>
                            <div className={styles.studentName}>예술경영전공 합격 심재용</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>서경대학교</div>
                            <div className={styles.studentName}>영화영상학과 합격 류태영</div>
                            <div className={styles.studentName}>영화영상학과 합격 이준서</div>
                            <div className={styles.studentName}>영화영상학과 합격 가진호</div>
                            <div className={styles.studentName}>영화영상학과 합격 민채희</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>상명대학교</div>
                            <div className={styles.studentName}>영화영상전공 합격 이정원</div>
                            <div className={styles.studentName}>영화영상전공 합격 하정성</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>용인대학교</div>
                            <div className={styles.studentName}>영화영상학과 합격 최성우</div>
                            <div className={styles.studentName}>영화영상학과 합격 김슬기</div>
                            <div className={styles.studentName}>영화영상학과 합격 허성혁</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>수원대학교</div>
                            <div className={styles.studentName}>영화예술학과 합격 류태영</div>
                            <div className={styles.studentName}>영화예술학과 합격 이 환</div>
                            <div className={styles.studentName}>영화예술학과 합격 이예림</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>동아방송예술대학교</div>
                            <div className={styles.studentName}>영화예술과 합격 강하니</div>
                            <div className={styles.studentName}>영화예술과 합격 김태완</div>
                            <div className={styles.studentName}>영화예술과 합격 류태영</div>
                            <div className={styles.studentName}>영화예술과 합격 최성우</div>
                            <div className={styles.studentName}>영화예술과 합격 김소현</div>
                            <div className={styles.studentName}>영화예술과 합격 조진영</div>
                            <div className={styles.studentName}>영화예술과 합격 강은서</div>
                            <div className={styles.studentName}>영화예술과 합격 허성혁</div>
                            <div className={styles.studentName}>영화예술과 합격 김도이</div>
                            <div className={styles.studentName}>영화예술과 합격 복세진</div>
                            <div className={styles.studentName}>영화예술과 합격 박설아</div>
                            <div className={styles.studentName}>영화예술과 합격 박은결</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>성결대학교</div>
                            <div className={styles.studentName}>영화영상학과 합격 이준서</div>
                            <div className={styles.studentName}>영화영상학과 합격 가진호</div>
                            <div className={styles.studentName}>영화영상학과 합격 정세빈</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>서일대학교</div>
                            <div className={styles.studentName}>영화방송공연예술학과 합격 류태영</div>
                            <div className={styles.studentName}>영화방송공연예술학과 합격 정다은</div>
                            <div className={styles.studentName}>영화방송공연예술학과 합격 한은빈</div>
                            <div className={styles.studentName}>영화방송공연예술학과 합격 정연우</div>
                            <div className={styles.studentName}>영화방송공연예술학과 합격 이지현</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>대진대학교</div>
                            <div className={styles.studentName}>영화영상학과 합격 강하니</div>
                            <div className={styles.studentName}>영화영상학과 합격 배소예</div>
                            <div className={styles.studentName}>영화영상학과 합격 정다은</div>
                            <div className={styles.studentName}>영화영상학과 합격 양시아</div>
                            <div className={styles.studentName}>영화영상학과 합격 김소현</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>목원대학교</div>
                            <div className={styles.studentName}>영화영상전공 합격 최연령</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>청주대학교</div>
                            <div className={styles.studentName}>영화영상학과 합격 정세빈</div>
                            <div className={styles.studentName}>영화영상학과 합격 강하니</div>
                            <div className={styles.studentName}>영화영상학과 합격 최연령</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>평택대학교</div>
                            <div className={styles.studentName}>영화영상 전공 합격 최연령</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>순천향대학교</div>
                            <div className={styles.studentName}>공연영상학과 합격 심재용</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>백석예술대학교</div>
                            <div className={styles.studentName}>영상학부 영화콘텐츠 전공 합격 유제이</div>
                            <div className={styles.studentName}>영상학부 영화콘텐츠 전공 합격 정하연</div>
                            <div className={styles.studentName}>영상학부 영화콘텐츠 전공 합격 박서현</div>
                            <div className={styles.studentName}>영상학부 영화콘텐츠 전공 합격 이승주</div>
                        </div>
                        <div className={styles.schoolItem}>
                            <div className={styles.schoolName}>한국영상대학교</div>
                            <div className={styles.studentName}>영화영상과 합격 김태완</div>
                        </div>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <a href="#system" className="btn btn-primary">
                        합격 시스템 자세히 보기
                    </a>
                </div>
            </div>
        </section>
    );
}
