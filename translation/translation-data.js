// Translation Exercises Database
const translationExercises = {
    turkishToEnglish: [
        // Easy Level
        {
            id: 1,
            level: "easy",
            turkish: "Bugün hava çok güzel.",
            english: "The weather is very nice today.",
            keywords: ["weather", "nice", "today"]
        },
        {
            id: 2,
            level: "easy",
            turkish: "Ben her gün İngilizce çalışıyorum.",
            english: "I study English every day.",
            keywords: ["study", "English", "every", "day"]
        },
        {
            id: 3,
            level: "easy",
            turkish: "Kahvaltı için ne yedin?",
            english: "What did you eat for breakfast?",
            keywords: ["what", "eat", "breakfast"]
        },
        {
            id: 4,
            level: "easy",
            turkish: "Yarın sinemaya gideceğim.",
            english: "I will go to the cinema tomorrow.",
            keywords: ["will", "go", "cinema", "tomorrow"]
        },
        {
            id: 5,
            level: "easy",
            turkish: "Annem çok iyi yemek yapar.",
            english: "My mother cooks very well.",
            keywords: ["mother", "cook", "well"]
        },

        // Medium Level
        {
            id: 6,
            level: "medium",
            turkish: "Ödevimi bitirdiğimde sana telefon edeceğim.",
            english: "I will call you when I finish my homework.",
            keywords: ["call", "when", "finish", "homework"]
        },
        {
            id: 7,
            level: "medium",
            turkish: "Eğer yağmur yağmazsa, parka gidebiliriz.",
            english: "If it doesn't rain, we can go to the park.",
            keywords: ["if", "rain", "can", "go", "park"]
        },
        {
            id: 8,
            level: "medium",
            turkish: "Bu kitap geçen yıl yazılmıştı ama henüz yayınlanmadı.",
            english: "This book was written last year but hasn't been published yet.",
            keywords: ["book", "written", "published", "yet"]
        },
        {
            id: 9,
            level: "medium",
            turkish: "Toplantıya katılamadığım için üzgünüm.",
            english: "I'm sorry that I couldn't attend the meeting.",
            keywords: ["sorry", "couldn't", "attend", "meeting"]
        },
        {
            id: 10,
            level: "medium",
            turkish: "Babam emekli olduğundan beri daha mutlu görünüyor.",
            english: "My father has looked happier since he retired.",
            keywords: ["father", "happier", "since", "retired"]
        },

        // Hard Level
        {
            id: 11,
            level: "hard",
            turkish: "Teknolojinin hızla gelişmesi, insanların yaşam tarzlarını derinden etkilemektedir.",
            english: "The rapid development of technology is profoundly affecting people's lifestyles.",
            keywords: ["rapid", "development", "technology", "affecting", "lifestyles"]
        },
        {
            id: 12,
            level: "hard",
            turkish: "Araştırmacılar, iklim değişikliğinin gelecekteki nesiller üzerinde kalıcı etkileri olacağını öne sürüyorlar.",
            english: "Researchers suggest that climate change will have lasting effects on future generations.",
            keywords: ["researchers", "climate change", "lasting effects", "future generations"]
        },
        {
            id: 13,
            level: "hard",
            turkish: "Eğitim sisteminin modernize edilmesi gerektiğine dair artan bir farkındalık var.",
            english: "There is growing awareness that the education system needs to be modernized.",
            keywords: ["growing", "awareness", "education system", "modernized"]
        },
        {
            id: 14,
            level: "hard",
            turkish: "Yapay zeka teknolojilerinin etik kullanımı konusunda ciddi tartışmalar devam ediyor.",
            english: "Serious debates continue regarding the ethical use of artificial intelligence technologies.",
            keywords: ["serious", "debates", "ethical", "artificial intelligence"]
        },
        {
            id: 15,
            level: "hard",
            turkish: "Ekonomik kriz sırasında birçok şirket işgücünü azaltmak zorunda kaldı.",
            english: "During the economic crisis, many companies were forced to reduce their workforce.",
            keywords: ["economic crisis", "companies", "forced", "reduce", "workforce"]
        }
    ],

    englishToTurkish: [
        // Easy Level
        {
            id: 16,
            level: "easy",
            english: "I love reading books.",
            turkish: "Kitap okumayı seviyorum.",
            keywords: ["kitap", "okumak", "sevmek"]
        },
        {
            id: 17,
            level: "easy",
            english: "She is my best friend.",
            turkish: "O benim en iyi arkadaşım.",
            keywords: ["en iyi", "arkadaş"]
        },
        {
            id: 18,
            level: "easy",
            english: "We went to the beach yesterday.",
            turkish: "Dün sahile gittik.",
            keywords: ["dün", "sahil", "gitmek"]
        },
        {
            id: 19,
            level: "easy",
            english: "Can you help me with this?",
            turkish: "Bunda bana yardım edebilir misin?",
            keywords: ["yardım", "etmek"]
        },
        {
            id: 20,
            level: "easy",
            english: "The cat is sleeping on the sofa.",
            turkish: "Kedi kanepede uyuyor.",
            keywords: ["kedi", "kanepe", "uyumak"]
        },

        // Medium Level
        {
            id: 21,
            level: "medium",
            english: "I've been learning Turkish for two years.",
            turkish: "İki yıldır Türkçe öğreniyorum.",
            keywords: ["yıl", "Türkçe", "öğrenmek"]
        },
        {
            id: 22,
            level: "medium",
            english: "Although it was raining, we decided to go out.",
            turkish: "Yağmur yağmasına rağmen dışarı çıkmaya karar verdik.",
            keywords: ["rağmen", "yağmur", "dışarı", "karar"]
        },
        {
            id: 23,
            level: "medium",
            english: "The report must be submitted by Friday.",
            turkish: "Rapor Cuma gününe kadar teslim edilmelidir.",
            keywords: ["rapor", "Cuma", "teslim edilmek"]
        },
        {
            id: 24,
            level: "medium",
            english: "I wish I had studied harder for the exam.",
            turkish: "Keşke sınav için daha çok çalışsaydım.",
            keywords: ["keşke", "sınav", "çalışmak"]
        },
        {
            id: 25,
            level: "medium",
            english: "She suggested that we should leave early.",
            turkish: "Erken çıkmamızı önerdi.",
            keywords: ["erken", "çıkmak", "önermek"]
        },

        // Hard Level
        {
            id: 26,
            level: "hard",
            english: "The implementation of renewable energy policies requires substantial investment.",
            turkish: "Yenilenebilir enerji politikalarının uygulanması önemli yatırım gerektirmektedir.",
            keywords: ["yenilenebilir enerji", "politika", "uygulama", "yatırım"]
        },
        {
            id: 27,
            level: "hard",
            english: "Despite numerous challenges, the project was completed successfully.",
            turkish: "Sayısız zorluğa rağmen, proje başarıyla tamamlandı.",
            keywords: ["sayısız", "zorluk", "rağmen", "proje", "başarıyla", "tamamlanmak"]
        },
        {
            id: 28,
            level: "hard",
            english: "The research findings indicate a significant correlation between the two variables.",
            turkish: "Araştırma bulguları iki değişken arasında önemli bir ilişki olduğunu göstermektedir.",
            keywords: ["araştırma", "bulgu", "değişken", "ilişki", "göstermek"]
        },
        {
            id: 29,
            level: "hard",
            english: "Critical thinking skills are essential for academic success.",
            turkish: "Eleştirel düşünme becerileri akademik başarı için gereklidir.",
            keywords: ["eleştirel", "düşünme", "beceri", "akademik", "başarı"]
        },
        {
            id: 30,
            level: "hard",
            english: "The government has announced measures to address the housing crisis.",
            turkish: "Hükümet konut krizini ele almak için önlemler açıkladı.",
            keywords: ["hükümet", "konut", "kriz", "önlem", "açıklamak"]
        }
    ]
};
