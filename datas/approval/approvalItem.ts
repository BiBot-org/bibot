export const approvalStatusBC: Record<string, string> = {
  APPROVED: "var(--bibot-primary)",
  REJECTED: "#F99C9C",
  PENDING: "#FFC700",
};

export const approvalStatus: Record<string, string> = {
  APPROVED: "승인",
  REJECTED: "거절",
  PENDING: "대기중",
};

export const approvalIcon: Record<string, string> = {
  APPROVED: "assets/images/icons/check.svg",
  REJECTED: "assets/images/icons/reject.svg",
  PENDING: "assets/images/icons/sand.svg",
};

export const approvalType: Record<string, string> = {
  FOOD: "식비",
  OFFICE: "비품비",
  OIL: "유류비",
  ETC: "기타",
};
