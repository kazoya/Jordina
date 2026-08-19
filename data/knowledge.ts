import type { KnowledgeAnswer } from "@/types";

export const sampleQuestions = [
  "من جوردينا؟",
  "ما مجال الشركة السعودية الأردنية للتطوير الصناعي؟",
  "كيف يعمل محرّك تصدير وموزّعون؟",
  "ماذا نعرف من الموقع فقط؟",
];

export const knowledgeAnswers: KnowledgeAnswer[] = [
  {
    id: "k1",
    question: "من جوردينا؟",
    answer: "جوردينا — الشركة السعودية الأردنية للتطوير الصناعي. المجال المعلن: آيس كريم ومخبوزات ورقائق منذ 1999. المصدر: https://www.jordinajo.com/",
    citations: [{ title: "jordinajo.com", note: "صفحة عامة / من نحن كما فُحصت" }],
  },
  {
    id: "k2",
    question: "ما مجال الشركة السعودية الأردنية للتطوير الصناعي؟",
    answer: "آيس كريم ومخبوزات ورقائق منذ 1999 — قائمة تصدير موسمية لا تُرسل لعميل جديد إلا بعد اعتمادك",
    citations: [{ title: "jordinajo.com", note: "مجال معلن كما فُحص" }],
  },
  {
    id: "k3",
    question: "كيف يعمل محرّك تصدير وموزّعون؟",
    answer: "الاقتراح يظهر في اللوح. التنفيذ (سعر، عرض، زيارة) لا يتم إلا باعتماد مدير المبيعات. قائمة تصدير موسمية لا تُرسل لعميل جديد إلا بعد اعتمادك",
    citations: [{ title: "هذا التصور", note: "صفحة المحرّك — بيانات تجريبية" }],
  },
  {
    id: "k4",
    question: "ماذا نعرف من الموقع فقط؟",
    answer: "الموقع يكرر نصوصاً إنجليزية ويظهر قوالب «CONTACT US CONTENT». فرصة هوية لا هجوم. أرقام اللوح تجريبية.",
    citations: [{ title: "jordinajo.com", note: "ما هو منشور فقط" }],
  },
];

export const fallbackKnowledgeAnswer: KnowledgeAnswer = {
  id: "fallback",
  question: "",
  answer: "لا إجابة من مصدر معتمد داخل هذا التصور. نعتذر بدل الاختراع. اسأل المبيعات أو راجع الموقع.",
  citations: [{ title: "قاعدة الصدق", note: "المصدر أو الاعتذار" }],
};
