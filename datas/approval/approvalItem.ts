export const approvalStatusBC: Record<string, string> = {
  check: "var(--bibot-primary)",
  reject: "#F99C9C",
  wait: "#FFC700",
};

export const approvalIcon: Record<string, string> = {
  APPROVED: "assets/images/icons/check.svg",
  REJECT: "assets/images/icons/reject.svg",
  PENDING: "assets/images/icons/sand.svg",
};

export const approvalType: Record<string, string> = {
  FOOD: "식비",
  OFFICE: "비품비",
  OIL: "유류비",
  ETC: "기타",
};
