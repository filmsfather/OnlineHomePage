import styles from './AnnualSchedule.module.css';

export default function AnnualSchedule() {
    const scheduleData = [
        { name: "정규과정", date: "11.3 ~ 11.30", fee: "납부일 11.3 / 700,000원", note: "정규반 첫 개강 11월 8일" },
        { name: "영화제작 특강", date: "11.3 ~ 11.30", fee: "0원", note: "정규 수업 외 시간 진행" },
        { name: "정규과정", date: "12.1 ~ 12.28", fee: "납부일 11.3 / 700,000원", note: "" },
        { name: "영화제작 특강", date: "12.1 ~ 12.28", fee: "0원", note: "정규 수업 외 시간 진행" },
        { name: "정규과정", date: "12.29 ~ 1.25", fee: "납부일 12.1 / 700,000원", note: "" },
        { name: "영화제작 특강", date: "12.29 ~ 1.25", fee: "0원", note: "1월 15일 영화제작 특강 신청 마감" },
        { name: "정규과정", date: "1.26 ~ 2.22", fee: "납부일 1.26 / 562,500원", note: "2월 14일(토) 설 연휴 휴무" },
        { name: "영화제작 특강", date: "1.26 ~ 2.22", fee: "0원", note: "영화제작 프로덕션 기간" },
        { name: "정규과정", date: "2.23 ~ 3.22", fee: "납부일 2.23 / 700,000원", note: "2.23~3.1 모의실기 / 3.8 제작 영화 상영회" },
        { name: "정규과정", date: "3.23 ~ 4.19", fee: "납부일 3.23 / 700,000원", note: "" },
        { name: "정규과정", date: "4.20 ~ 5.17", fee: "납부일 4.20 / 700,000원", note: "4.20~4.26 모의실기" },
        { name: "심화과정", date: "5.18 ~ 6.14", fee: "납부일 5.18 / 700,000원", note: "5월 18일 심화과정 시작" },
        { name: "심화과정", date: "6.15 ~ 7.12", fee: "납부일 6.15 / 700,000원", note: "6.15~6.21 모의실기 / 6.22~7.12 지원 대학 컨설팅" },
        { name: "대학별 집중대비", date: "7.13 ~ 8.9", fee: "납부일 7.13 / 700,000원", note: "7월 13일 집중대비 시작" },
        { name: "대학별 집중대비", date: "8.10 ~ 9.6", fee: "납부일 8.10 / 700,000원", note: "" },
        { name: "직전대비 (8주)", date: "9.7 ~ 10.31", fee: "납부일 9.7 / 2,000,000원", note: "9월 14일 시작 / 매일 모의실기 1~2회 / 주 1회 1:1 피드백 및 컨설팅 / 우디쌤 특강 포함" },
    ];

    return (
        <section className={`section ${styles.schedule}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>우디캠퍼스 연간 학습 로드맵</h2>
                    <p className={styles.subtitle}>
                        성장의 방향과 단계를 명확히 확인할 수 있는 우디캠퍼스의 1년 로드맵입니다.<br />
                        (연간 일정은 변동 될 수 있습니다.)
                    </p>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>기간명</th>
                                <th>기간(날짜)</th>
                                <th>수업료</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.map((row, index) => (
                                <tr key={index}>
                                    <td style={{ fontWeight: '700', color: 'var(--foreground)' }}>{row.name}</td>
                                    <td>{row.date}</td>
                                    <td>{row.fee}</td>
                                    <td>{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoTitle}>
                            <span className={styles.checkIcon}>✓</span>
                            환불규정
                        </div>
                        <p className={styles.infoDesc}>
                            우디캠퍼스의 환불 규정은 교육지원청 기준을 따릅니다.<br />
                            수업 시작 전에는 전액 환불, 시작 후에는 경과 기간에 따라 차등 환불됩니다.<br />
                            개인 사유(질병 등)로 인한 결석 시 환불이 원칙적으로 불가하며<br />
                            총 수업 기간의 1/2이 지나면 환불이 어렵습니다.
                        </p>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoTitle}>
                            <span className={styles.checkIcon}>✓</span>
                            입학 등록 원서 바로가기
                        </div>
                        <p className={styles.infoDesc} style={{ marginBottom: '1.5rem' }}>
                            아래 버튼을 클릭하여 등록원서를 작성할 수 있습니다.
                        </p>
                        <div className={styles.qrSection}>
                            <a href="#register" className={styles.applyBtn}>
                                등록원서 작성하기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
