// script.js
// Admas News - Logic and Interactivity

document.addEventListener('DOMContentLoaded', function () {
    // --- DATA STORE (with actual news content and real images) ---
    const newsData = {
        articles: [
            { id: 16, author: { name: 'Admas Finance', avatar: 'https://placehold.co/48x48/047857/ffffff?text=F' }, category_eng: 'Top Story', category_amh: 'ዋና ዜና', title_eng: "Ethiopia Projects 8.9% Growth, Tables Record Budget for 2025/26", title_amh: 'ኢትዮጵያ 8.9% እድገት እያሳየች ለ2025/26 የክብረ ወሰን በጀት አቀረበች', description_eng: 'Finance Minister Ahmed Shide presented a record $14.16 billion budget to parliament.', description_amh: 'የገንዘብ ሚኒስትሩ አህመድ ሺዴ 14.16 ቢሊዮን ዶላር የክብረ ወሰን በጀት ለፓርላማ አቅርበዋል።', content_eng: 'Ethiopia\'s economy is forecast to grow by 8.9% in the 2025/2026 fiscal year, an increase from the estimated 8.4% in the current year. Finance Minister Ahmed Shide announced this while presenting a record draft budget of 1.93 trillion birr (approximately $14.16 billion). The forecast reflects optimism tied to ongoing economic reforms supported by the International Monetary Fund (IMF), including foreign exchange liberalization and efforts to enhance debt sustainability. The new budget allocates significant funds to recurrent expenses, investment projects, and regional subsidies, while targeting a fiscal deficit of 2.2% of GDP.', content_amh: 'የኢትዮጵያ ኢኮኖሚ በ2025/2026 በጀት ዓመት 8.9% ያድጋል ተብሎ የተተነበየ ሲሆን ይህም ከዘንድሮው 8.4% ዕድገት ብልጫ አለው። ይህንን ያስታወቁት የገንዘብ ሚኒስትሩ አህመድ ሺዴ 1.93 ትሪሊዮን ብር (ገደማ 14.16 ቢሊዮን ዶላር) የሆነ የክብረ ወሰን ረቂቅ በጀት ሲያቀርቡ ነው። ይህ ትንበያ በአለም አቀፉ የገንዘብ ድርጅት (IMF) በሚደገፉ የውጭ ምንዛሪ ነፃነት እና የዕዳ ዘላቂነትን ለማሻሻል በሚደረጉ ጥረቶች በመሳሰሉ ቀጣይ የኢኮኖሚ ማሻሻያዎች ላይ ያለውን ብሩህ ተስፋ ያሳያል። አዲሱ በጀት ለመደበኛ ወጪዎች、 ለኢንቨስትመንት ፕሮጀክቶች እና ለክልላዊ ድጎማዎች ከፍተኛ ገንዘብ ይመድባል、 የበጀት ጉድለቱም ከጠቅላላ የሀገር ውስጥ ምርት 2.2% እንዲሆን ታቅዷል።', image: 'https://placehold.co/800x500/059669/ffffff?text=Ethiopian+Parliament', size: 'large', tags: ['home', 'business'], source_eng: 'Ecofin Agency', source_amh: 'ኢኮፊን ኤጀንሲ', source_url: '#', reactions: { '👍': 210, '❤️': 150, '😂': 10, '😮': 45, '😠': 22 }, comments: [] },
            { id: 14, author: { name: 'Wollo University Comms', avatar: 'https://placehold.co/48x48/065f46/ffffff?text=W' }, category_eng: 'Education', category_amh: 'ትምህርት', title_eng: 'Wollo University Signs MOU with Manufacturing Institute to Boost Tech', title_amh: 'ወሎ ዩኒቨርሲቲ ቴክኖሎጂን ለማሳደግ ከአምራች ኢንዱስትሪ ኢንስቲትዩት ጋር የመግባቢያ ሰነድ ተፈራረመ', description_eng: 'The partnership aims to link academia with industry to foster innovation.', description_amh: 'ትብብሩ አካዳሚውን ከኢንዱስትሪው ጋር በማገናኘት ፈጠራን ለማበረታታት ያለመ ነው።', content_eng: 'Wollo University has signed a memorandum of understanding (MOU) with the Manufacturing Industry Development Institute. The agreement focuses on enhancing technology transfer, providing capacity-building training, and creating a platform for students to engage in practical, industry-relevant projects. University officials stated the partnership is crucial for producing skilled graduates who can meet the demands of the country\'s growing manufacturing sector.', content_amh: 'ወሎ ዩኒቨርሲቲ ከአምራች ኢንዱስትሪ ልማት ኢንስቲትዩት ጋር የመግባቢያ ሰነድ ተፈራርሟል። ስምምነቱ የቴክኖሎጂ ሽግግርን ለማሳደግ、 የአቅም ግንባታ ሥልጠናዎችን ለመስጠት እና ተማሪዎች በተግባራዊ、 ከኢንዱስትሪ ጋር ተዛማጅነት ባላቸው ፕሮጀክቶች ላይ እንዲሳተፉ መድረክ መፍጠር ላይ ያተኩራል። የዩኒቨርሲቲው ባለሥልጣናት ይህ ትብብር የሀገሪቱን እያደገ የመጣውን የማኑፋክቸሪንግ ዘርፍ ፍላጎት የሚያሟሉ ክህሎት ያላቸው ምሩቃንን ለማፍራት ወሳኝ መሆኑን ገልጸዋል።', image: 'https://placehold.co/400x250/065f46/ffffff?text=Wollo+University+Campus', size: 'small', tags: ['home', 'education', 'technology'], source_eng: 'Wollo University', source_amh: 'ወሎ ዩኒቨርሲቲ', source_url: 'https://wu.edu.et/', reactions: { '👍': 180, '❤️': 120, '😂': 2, '😮': 40, '😠': 3 }, comments: [] },
            { id: 12, author: { name: 'Admas Health Desk', avatar: 'https://placehold.co/48x48/9f1239/ffffff?text=H' }, category_eng: 'Health', category_amh: 'ጤና', title_eng: "Health Workers' Strike Enters Third Week", title_amh: 'የጤና ባለሙያዎች አድማ ሦስተኛ ሳምንቱን ይዟል', description_eng: 'Senior doctors report pressure from authorities as nationwide strike continues.', description_amh: 'ከፍተኛ ዶክተሮች ከባለሥልጣናት ጫና እንደበዛባቸው ገለጹ።', content_eng: 'The partial nationwide strike by health professionals has entered its third week, with senior doctors in several regions reporting mounting pressure from authorities to return to work. The strike, organized to demand better pay, working conditions, and safety, has significantly impacted patient care in public hospitals. Associations representing the health workers have urged for a swift and meaningful response from the government to address their demands.', content_amh: 'የጤና ባለሙያዎች በመላ ሀገሪቱ የጀመሩት ከፊል አድማ ሦስተኛ ሳምንቱን ይዟል። በተለያዩ ክልሎች የሚገኙ ከፍተኛ ዶክተሮች ወደ ሥራ እንዲመለሱ ከባለሥልጣናት ከፍተኛ ጫና እየደረሰባቸው መሆኑን ተናግረዋል። የተሻለ ደመወዝ、 የሥራ ሁኔታ እና ደህንነትን ለማረጋገጥ የተጠራው ይህ አድማ በሕዝብ ሆስፒታሎች ውስጥ በታካሚዎች እንክብካቤ ላይ ከፍተኛ ተጽዕኖ አሳድሯል። የጤና ባለሙያዎችን የሚወክሉ ማህበራት በመንግስት በኩል ለጥያቄዎቻቸው ፈጣን እና ትርጉም ያለው ምላሽ እንዲሰጥ ጠይቀዋል።', image: 'https://placehold.co/400x250/9f1239/ffffff?text=Hospital+Ward', size: 'small', tags: ['home', 'health'], source_eng: 'Addis Standard', source_amh: 'አዲስ ስታንዳርድ', source_url: '#', reactions: { '👍': 140, '❤️': 80, '😂': 5, '😮': 65, '😠': 110 }, comments: [] },
            { id: 17, author: { name: 'Admas Health Desk', avatar: 'https://placehold.co/48x48/9f1239/ffffff?text=H' }, category_eng: 'Health', category_amh: 'ጤና', title_eng: "Ethiopia Confirms First Mpox Cases", title_amh: "ኢትዮጵያ የመጀመሪያዎቹን የMpox ተጠቂዎች አረጋገጠች", description_eng: '', description_amh: '', content_eng: 'The Ethiopian Public Health Institute (EPHI) has confirmed the country\'s first cases of Mpox. The initial cases were identified in the Oromia region, near the Kenyan border. EPHI stated that surveillance has been increased at all points of entry and that logistical challenges for testing are being addressed. WHO is reportedly exploring support options, as no Mpox vaccines are currently available in the country.', content_amh: 'የኢትዮጵያ ህብረተሰብ ጤና ኢንስቲትዩት (EPHI) በሀገሪቱ የመጀመሪያዎቹን የMpox ተጠቂዎች አረጋግጧል። የመጀመሪያዎቹ ተጠቂዎች በኦሮሚያ ክልል ከኬንያ ድንበር አቅራቢያ ተለይተዋል። ኢንስቲትዩቱ በሁሉም የመግቢያ ቦታዎች ላይ ክትትል መጨመሩን እና ለምርመራ የሚያጋጥሙ የሎጅስቲክስ ችግሮች እየተፈቱ መሆኑን ገልጿል። በአሁኑ ወቅት በሀገሪቱ የMpox ክትባቶች ስለሌሉ የዓለም ጤና ድርጅት የድጋፍ አማራጮችን እየፈለገ መሆኑ ተነግሯል።', image: 'https://placehold.co/400x250/7e22ce/ffffff?text=Microscope+View', size: 'card', tags: ['home', 'health'], source_eng: 'ReliefWeb', source_amh: 'ሪሊፍዌብ', source_url: '#', reactions: { '👍': 45, '❤️': 12, '😂': 2, '😮': 88, '😠': 9 }, comments: [] },
            { id: 18, author: { name: 'Admas Business Desk', avatar: 'https://placehold.co/48x48/047857/ffffff?text=B' }, category_eng: 'Business', category_amh: 'ንግድ', title_eng: "Coffee Exports Hit Record High, Surpassing $3 Billion", title_amh: "የቡና ኤክስፖርት ከ3 ቢሊዮን ዶላር በላይ በማስገኘት ክብረ ወሰን አስመዘገበ", description_eng: '', description_amh: '', content_eng: 'Ethiopia\'s agricultural exports have surpassed $3 billion, driven by record earnings from coffee. The sector remains a critical source of foreign currency for the country. The Ethiopian Coffee and Tea Authority attributed the success to improved logistics, better market linkages for farmers, and increasing global demand for Ethiopian specialty coffee varieties. Efforts are underway to further boost production and add value through local processing.', content_amh: 'የኢትዮጵያ የግብርና ምርቶች ኤክስፖርት ከቡና በተገኘው የክብረ ወሰን ገቢ በመነዳት ከ3 ቢሊዮን ዶላር በላይ ሆኗል። ይህ ዘርፍ ለሀገሪቱ ወሳኝ የውጭ ምንዛሪ ምንጭ ሆኖ ቀጥሏል። የኢትዮጵያ ቡናና ሻይ ባለስልጣን ለስኬቱ ምክንያት ብሎ የጠቀሰው የተሻሻለ ሎጂስቲክስ、 ለአርሶ አደሮች የተሻለ የገበያ ትስስር መፍጠር እና የኢትዮጵያ ልዩ የቡና ዝርያዎች ላይ ያለው ዓለም አቀፍ ፍላጎት መጨመሩን ነው። ምርትን የበለጠ ለማሳደግና በአገር ውስጥ በማቀነባበር እሴት ለመጨመር ጥረቶች በመደረግ ላይ ናቸው።', image: 'https://placehold.co/400x250/ca8a04/ffffff?text=Coffee+Harvest', size: 'card', tags: ['home', 'business'], source_eng: 'FanaBC', source_amh: 'ፋና ብሮድካስቲንግ', source_url: '#', reactions: { '👍': 600, '❤️': 450, '😂': 8, '😮': 50, '😠': 4 }, comments: [] },
            { id: 15, author: { name: 'Admas Politics Desk', avatar: 'https://placehold.co/48x48/be123c/ffffff?text=P' }, category_eng: 'Politics', category_amh: 'ፖለቲካ', title_eng: "New 'Simeret' Party Registered by former TPLF Members", title_amh: 'በቀድሞ የህወሓት አባላት አዲስ \'ስምረት\' ፓርቲ ተመዘገበ', description_eng: '', description_amh: '', content_eng: 'A new political party named Tigray Democratic Solidarity (Simeret) has received a preliminary registration certificate from the National Election Board of Ethiopia (NEBE). The party\'s founding members include former TPLF figures who were ousted during the last general assembly, signaling a potential shift in the political landscape of the Tigray region.', content_amh: 'ትግራይ ዴሞክራሲያዊ ትብብር (ስምረት) የተሰኘ አዲስ የፖለቲካ ፓርቲ ከኢትዮጵያ ብሔራዊ ምርጫ ቦርድ (ኢምቦ) ጊዜያዊ የምዝገባ ምስክር ወረቀት አግኝቷል። የፓርቲው መስራች አባላት ባለፈው ጠቅላላ ጉባኤ ከኃላፊነታቸው የተነሱ የቀድሞ የህወሓት አመራሮችን ያካተተ ሲሆን ይህም በትግራይ ክልል የፖለቲካ ምህዳር ላይ ለውጥ ሊኖር እንደሚችል ያሳያል።', image: 'https://placehold.co/400x250/1e40af/ffffff?text=Political+Meeting', size: 'card', tags: ['politics'], source_eng: 'ReliefWeb', source_amh: 'ሪሊፍዌብ', source_url: '#', reactions: { '👍': 90, '❤️': 30, '😂': 15, '😮': 50, '😠': 20 }, comments: [] },
            { id: 9, author: { name: 'Admas Staff', avatar: 'https://placehold.co/48x48/1d4ed8/ffffff?text=A' }, category_eng: 'Business', category_amh: 'ንግድ', title_eng: 'Ethiopian Airlines to Launch Daily Moscow Flights', title_amh: 'የኢትዮጵያ አየር መንገድ በየቀኑ ወደ ሞስኮ በረራ ይጀምራል', description_eng: '', description_amh: '', content_eng: 'Ethiopian Airlines plans to significantly expand its service between Moscow and Addis Ababa, with daily flights scheduled to commence in December 2025. This move reflects the airline\'s broader strategy to expand its global footprint and strengthen Ethiopia\'s role as a key aviation hub connecting Africa with Europe and Asia.', content_amh: 'የኢትዮጵያ አየር መንገድ በሞስኮ እና በአዲስ አበባ መካከል ያለውን አገልግሎት በከፍተኛ ደረጃ ለማስፋፋት አቅዷል、 በታህሳስ 2025 በየቀኑ በረራዎች ይጀምራሉ። ይህ እርምጃ አየር መንገዱ ዓለም አቀፋዊ ተደራሽነቱን ለማስፋት እና ኢትዮጵያን አፍሪካን ከአውሮፓ እና እስያ ጋር በማገናኘት ቁልፍ የአቪዬሽን ማዕከል እንድትሆን ያለውን ሚና ለማጠናከር ያለውን ሰፊ ስትራቴጂ ያሳያል።', image: 'https://placehold.co/400x250/0ea5e9/ffffff?text=Ethiopian+Airlines+787', size: 'card', tags: ['business'], source_eng: 'Addis Insight', source_amh: 'አዲስ ኢንሳይት', source_url: '#', reactions: { '👍': 300, '❤️': 180, '😂': 2, '😮': 35, '😠': 7 }, shares: 95, comments: [] },
        ]
    };

    // --- GLOBAL STATE & UTILITY FUNCTIONS ---
    let currentLang = 'eng';
    let previousPage = 'home';
    
    let mainContent;
    let footer;
    let searchInput;

    function getTranslated(item, key) {
        return item[`${key}_${currentLang}`] || item[`${key}_eng`];
    }

    // --- RENDER FUNCTIONS ---
    function renderHomePage() {
        const articles = newsData.articles;
        const mainArticle = articles.find(a => a.id === 12);
        const secondaryArticles = articles.filter(a => a.id === 2 || a.id === 14);
        const trendingArticles = [...articles].sort((a,b) => (Object.values(b.reactions).reduce((s,c)=>s+c,0)) - (Object.values(a.reactions).reduce((s,c)=>s+c,0))).slice(0, 4);

        mainContent.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <section class="mb-12">
                        <article class="group rounded-lg overflow-hidden shadow-lg bg-white card">
                            <a href="#" class="article-link" data-id="${mainArticle.id}">
                                <div class="relative">
                                    <img src="${mainArticle.image}" alt="${getTranslated(mainArticle, 'title')}" class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105">
                                    <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <span class="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-full">${getTranslated(mainArticle, 'category')}</span>
                                        <h2 class="text-white text-2xl md:text-4xl font-bold mt-2 leading-tight">${getTranslated(mainArticle, 'title')}</h2>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </section>
                    <section>
                         <h2 class="text-2xl font-bold border-b-4 border-blue-600 pb-2 mb-6" data-lang-eng="Latest News" data-lang-amh="የቅርብ ጊዜ ዜናዎች"></h2>
                         <div class="space-y-6 article-list">
                             ${secondaryArticles.map(article => renderListCard(article)).join('')}
                             ${articles.filter(a => a.id === 15 || a.id === 9).map(article => renderListCard(article)).join('')}
                         </div>
                    </section>
                </div>
                <aside>
                    <div class="sticky top-28">
                         <h2 class="text-2xl font-bold border-b-4 border-amber-500 pb-2 mb-6" data-lang-eng="Trending" data-lang-amh="በጣም የተነበቡ"></h2>
                         <div class="space-y-4">
                             ${trendingArticles.map(article => renderTrendingCard(article)).join('')}
                         </div>
                    </div>
                </aside>
            </div>
             <div id="no-results" class="hidden text-center text-slate-500 py-10"></div>
        `;
        addArticleClickListeners();
        translateStaticContent();
    }
    
    function renderCategoryPage(pageKey) {
        const articles = newsData.articles.filter(a => a.tags.includes(pageKey));
        mainContent.innerHTML = `
            <section>
                <h2 class="text-2xl font-bold border-b-4 border-blue-600 pb-2 mb-6" data-page-title></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 article-list">
                     ${articles.map(article => renderCard(article)).join('')}
                </div>
                <div id="no-results" class="hidden text-center text-slate-500 py-10"></div>
            </section>
        `;
        addArticleClickListeners();
        translateStaticContent();
    }

    function renderArticleDetailPage(articleId) {
        const article = newsData.articles.find(a => a.id === parseInt(articleId));
        mainContent.innerHTML = `
            <section class="max-w-4xl mx-auto bg-white card p-4 sm:p-8 rounded-lg shadow-lg">
                <div class="flex justify-between items-center mb-6">
                    <button id="back-button" class="bg-slate-200 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-300 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                        <span data-lang-eng="Back to News" data-lang-amh="ወደ ዜና ተመለስ"></span>
                    </button>
                    <button id="reader-mode-btn" class="bg-slate-200 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-300 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10.392C2.057 15.71 3.245 16 4.5 16a7.968 7.968 0 003.5-1.196V4.804zM11 4.804A7.968 7.968 0 0114.5 4c1.255 0 2.443.29 3.5.804v10.392c-1.057.514-2.245.804-3.5.804a7.968 7.968 0 01-3.5-1.196V4.804z" /></svg>
                        <span data-lang-eng="Reader Mode" data-lang-amh="የንባብ ሁነታ"></span>
                    </button>
                </div>
                <h1 class="text-3xl md:text-4xl font-bold mb-2">${getTranslated(article, 'title')}</h1>
                <div class="flex items-center text-sm text-slate-500 mb-4">
                    <img src="${article.author.avatar}" class="w-8 h-8 rounded-full mr-2" alt="${article.author.name}">
                    <span>By ${article.author.name}</span>
                    <span class="mx-2">|</span>
                    <span>${getTranslated(article, 'category')}</span>
                </div>
                <div class="text-sm text-slate-500 mb-4">
                    <span data-lang-eng="Source:" data-lang-amh="ምንጭ:"></span>
                    <a href="${article.source_url}" target="_blank" class="text-blue-600 hover:underline">${getTranslated(article, 'source')}</a>
                </div>
                <img src="${article.image}" alt="${getTranslated(article, 'title')}" class="w-full rounded-lg mb-6">
                <div class="prose max-w-none text-lg leading-relaxed mb-8">${getTranslated(article, 'content')}</div>
                
                <div class="border-t pt-6">
                    <div class="flex flex-col sm:flex-row justify-between items-center">
                        <div>
                            <h3 class="text-xl font-bold mb-4" data-lang-eng="Reactions" data-lang-amh="አስተያየቶች"></h3>
                            <div id="reactions-container" class="flex items-center space-x-4 mb-4">
                                ${Object.entries(article.reactions).map(([emoji, count]) => `
                                    <button class="reaction-btn p-2 text-2xl rounded-full hover:bg-slate-200" data-emoji="${emoji}">
                                        <span>${emoji}</span>
                                        <span class="text-sm font-semibold ml-1">${count}</span>
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                         <div>
                            <h3 class="text-xl font-bold mb-4" data-lang-eng="Share" data-lang-amh="አጋራ"></h3>
                            <div id="share-container" class="flex items-center space-x-2">
                                <a href="#" target="_blank" rel="noopener noreferrer" data-sharer="facebook" class="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-900"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" data-sharer="twitter" class="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.808 4.649-.757.205-1.554.25-2.353.088.608 1.88 2.368 3.243 4.456 3.282-1.78 1.49-3.953 2.3-6.28 2.053.645 4.39 4.546 7.42 8.941 7.42 8.448 0 13.56-6.666 13.253-13.816.89-.64 1.66-1.45 2.27-2.36z"/></svg></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" data-sharer="whatsapp" class="p-2 rounded-full bg-green-500 text-white hover:bg-green-600"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.162 1.688zm7.821-1.117l.566.347c1.496.913 3.162 1.401 4.861 1.401 5.444 0 9.886-4.442 9.889-9.885.002-5.444-4.443-9.887-9.889-9.887-5.445 0-9.885 4.443-9.888 9.886.001 1.769.49 3.512 1.39 5.068l.327.541-1.04 3.793 3.814-1.03z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-4 mt-8" data-lang-eng="Comments" data-lang-amh="አስተያየቶች"></h3>
                    <div class="mb-6">
                        <form id="comment-form">
                            <textarea id="comment-text" class="w-full p-2 border rounded-md" rows="3" required></textarea>
                            <button type="submit" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" data-lang-eng="Post Comment" data-lang-amh="አስተያየት ለጥፍ"></button>
                        </form>
                    </div>
                    <div id="comments-list" class="space-y-6">
                        ${renderComments(article.comments)}
                    </div>
                </div>
            </section>
        `;
        document.getElementById('back-button').addEventListener('click', () => navigateTo(previousPage));
        document.getElementById('reader-mode-btn').addEventListener('click', () => enterReaderMode(article));
        addArticleDetailListeners(article);
        translateStaticContent();
    }
    
    function renderComments(comments) {
        return comments.map(comment => `
            <div class="flex space-x-3" data-comment-id="${comment.id}">
                <img src="${comment.user === 'Guest' ? 'https://placehold.co/48x48/94a3b8/ffffff?text=G' : newsData.articles.find(a=>a.author.name === comment.user)?.author.avatar || 'https://placehold.co/48x48/e2e8f0/7c3aed?text=U'}" class="w-12 h-12 rounded-full" alt="avatar">
                <div class="flex-1">
                    <p class="font-semibold">${comment.user}</p>
                    <p class="text-slate-700">${comment.text}</p>
                    <div class="flex items-center space-x-4 text-sm mt-2 text-slate-500">
                        <button class="flex items-center space-x-1 hover:text-green-600 vote-btn">
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
                            <span class="score">${comment.score}</span>
                        </button>
                        <button class="font-semibold hover:underline reply-btn" data-lang-eng="Reply" data-lang-amh="መልስ"></button>
                    </div>
                    <div class="pl-8 mt-4 space-y-4 reply-section">${comment.replies ? renderComments(comment.replies) : ''}</div>
                    <div class="pl-8 mt-4 hidden reply-form-container"></div>
                </div>
            </div>
        `).join('');
    }

    function renderCard(article) {
         return `<article class="bg-white card rounded-lg shadow-md overflow-hidden group article-card" data-title="${article.title_eng.toLowerCase()} ${article.title_amh}"><a href="#" class="article-link" data-id="${article.id}"><img src="${article.image}" class="w-full h-40 object-cover" alt="${getTranslated(article, 'title')}"><div class="p-4"><h4 class="font-bold text-md mt-1 group-hover:text-blue-600 transition-colors h-12">${getTranslated(article, 'title')}</h4></div></a></article>`;
    }
    
    function renderListCard(article) {
         return `<article class="bg-white card rounded-lg shadow-md overflow-hidden group article-card flex items-center" data-title="${article.title_eng.toLowerCase()} ${article.title_amh}"><a href="#" class="article-link flex w-full items-center p-4" data-id="${article.id}"><img src="${article.image}" class="w-32 h-20 object-cover rounded-md" alt="${getTranslated(article, 'title')}"><div class="px-4 flex-1"><h4 class="font-bold text-md mt-1 group-hover:text-blue-600 transition-colors">${getTranslated(article, 'title')}</h4><p class="text-sm text-slate-500 mt-1">${article.author.name}</p></div></a></article>`;
    }

    function renderTrendingCard(article) {
        return `<a href="#" class="article-link flex items-start space-x-4 group p-2 rounded-md hover:bg-slate-100 card" data-id="${article.id}">
            <img src="${article.image}" class="w-24 h-24 object-cover rounded-lg" alt="${getTranslated(article, 'title')}">
            <div>
                <h4 class="font-bold text-sm leading-tight group-hover:text-blue-600">${getTranslated(article, 'title')}</h4>
                <p class="text-xs text-slate-500 mt-1">${getTranslated(article, 'category')}</p>
            </div>
        </a>`;
    }

    function renderFooter() {
        footer.innerHTML = `
            <div class="container mx-auto px-4 py-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4">Admas<span class="text-blue-500">News</span></h3>
                        <p class="text-sm" data-lang-eng="Your horizon on the stories that matter. We are committed to delivering timely, accurate, and engaging news and analysis." data-lang-amh="ለእርስዎ አስፈላጊ በሆኑ ታሪኮች ላይ ያለዎት አድማስ። ወቅታዊ、 ትክክለኛ እና አሳታፊ ዜናዎችን እና ትንታኔዎችን ለማድረስ ቆርጠናል።"></p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-white mb-4" data-lang-eng="Quick Links" data-lang-amh="ፈጣን አገናኞች"></h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-white nav-link" data-page="politics" data-lang-eng="Politics" data-lang-amh="ፖለቲካ"></a></li>
                            <li><a href="#" class="hover:text-white nav-link" data-page="business" data-lang-eng="Business" data-lang-amh="ንግድ"></a></li>
                            <li><a href="#" class="hover:text-white nav-link" data-page="technology" data-lang-eng="Technology" data-lang-amh="ቴክኖሎጂ"></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-white mb-4" data-lang-eng="Legal" data-lang-amh="ህጋዊ"></h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-white" data-lang-eng="About Us" data-lang-amh="ስለ እኛ"></a></li>
                            <li><a href="#" class="hover:text-white" data-lang-eng="Contact Us" data-lang-amh="ያግኙን"></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-white mb-4" data-lang-eng="Subscribe" data-lang-amh="ይመዝገቡ"></h4>
                        <form class="flex" id="subscribe-form">
                            <input type="email" placeholder="your-email@example.com" required class="w-full rounded-l-md px-3 py-2 text-slate-800 focus:outline-none">
                            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700" data-lang-eng="Subscribe" data-lang-amh="ይመዝገቡ"></button>
                        </form>
                        <p id="subscribe-feedback" class="text-sm mt-2 text-green-400"></p>
                    </div>
                </div>
                <div class="mt-8 pt-6 border-t border-slate-700 text-center text-sm">
                    <p>&copy; 2025 Admas News. All Rights Reserved.</p>
                </div>
            </div>`;
        document.querySelectorAll('#footer .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(link.dataset.page);
            });
        });
        document.getElementById('subscribe-form').addEventListener('submit', handleSubscribe);
    }

    // --- EVENT LISTENERS & HANDLERS ---
    function handleSubscribe(e) {
        e.preventDefault();
        const feedbackEl = document.getElementById('subscribe-feedback');
        feedbackEl.textContent = currentLang === 'eng' ? 'Thank you for subscribing!' : 'ስለተመዘገቡ እናመሰግናለን!';
        e.target.reset();
        setTimeout(() => { feedbackEl.textContent = ''; }, 3000);
    }
    
    function translateStaticContent() {
         document.querySelectorAll('[data-lang-eng]').forEach(el => {
            if (el.dataset[`lang_${currentLang}`]) {
                el.textContent = el.dataset[`lang_${currentLang}`];
            }
        });
         const pageTitleEl = document.querySelector('[data-page-title]');
         if (pageTitleEl) {
             const pageKey = previousPage;
             pageTitleEl.textContent = document.querySelector(`.nav-link[data-page="${pageKey}"]`).dataset[`lang_${currentLang}`];
         }
        const commentTextarea = document.getElementById('comment-text');
        if(commentTextarea) {
             commentTextarea.placeholder = currentLang === 'eng' ? 'Add a comment...' : 'አስተያየት ይስጡ...';
        }
        document.getElementById('search-input').placeholder = currentLang === 'eng' ? 'Search articles...' : 'ጽሑፎችን ይፈልጉ...';
    }

    function switchLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('.lang-link').forEach(l => l.classList.remove('active'));
        document.getElementById(`lang-${lang}`).classList.add('active');
        navigateTo(previousPage);
    }

    function addArticleDetailListeners(article) {
        document.querySelectorAll('.reaction-btn').forEach(btn => btn.addEventListener('click', () => {
            const emoji = btn.dataset.emoji;
            article.reactions[emoji]++;
            btn.querySelector('span:last-child').textContent = article.reactions[emoji];
        }));
        document.getElementById('comment-form').addEventListener('submit', e => {
            e.preventDefault();
            const commentText = document.getElementById('comment-text').value;
            if (!commentText.trim()) return;
            const newComment = { id: Date.now(), user: 'Guest', text: commentText, score: 0, replies: [] };
            article.comments.unshift(newComment);
            document.getElementById('comments-list').innerHTML = renderComments(article.comments);
            addCommentActionListeners();
            translateStaticContent();
            e.target.reset();
        });
        addCommentActionListeners();
        addShareListeners(article);
    }

    function addCommentActionListeners() {
        document.querySelectorAll('.vote-btn').forEach(btn => btn.addEventListener('click', (e) => {
            const scoreEl = e.currentTarget.querySelector('.score');
            scoreEl.textContent = parseInt(scoreEl.textContent) + 1;
        }));
        document.querySelectorAll('.reply-btn').forEach(btn => btn.addEventListener('click', (e) => {
            const commentEl = e.currentTarget.closest('[data-comment-id]');
            const replyContainer = commentEl.querySelector('.reply-form-container');
            if (replyContainer.innerHTML === '') {
                const placeholder = currentLang === 'eng' ? 'Write a reply...' : 'መልስ ይጻፉ...';
                replyContainer.innerHTML = `<form class="reply-form flex items-center space-x-2 mt-2"><input type="text" class="w-full p-2 border rounded-md text-sm" placeholder="${placeholder}" required /><button type="submit" class="bg-blue-500 text-white px-3 py-1 text-sm rounded-md">Reply</button></form>`;
                replyContainer.querySelector('.reply-form').addEventListener('submit', (subEvent) => {
                    subEvent.preventDefault();
                    const replyText = subEvent.target.querySelector('input').value;
                    const replySection = commentEl.querySelector('.reply-section');
                    const newReply = { id: Date.now(), user: 'Guest', text: replyText, score: 0, replies: [] };
                    replySection.insertAdjacentHTML('beforeend', renderComments([newReply]));
                    replyContainer.innerHTML = '';
                });
            }
            replyContainer.classList.toggle('hidden');
        }));
    }

    function addArticleClickListeners() {
        document.querySelectorAll('.article-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                renderArticleDetailPage(link.dataset.id);
            });
        });
    }
    
    function navigateTo(pageKey) {
        const loader = `<div class="flex justify-center items-center py-20"><div id="loader"></div></div>`;
        mainContent.innerHTML = loader;

        setTimeout(() => {
            if (pageKey !== 'article') previousPage = pageKey;
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.toggle('active', l.dataset.page === pageKey);
                 if (l.dataset.page !== pageKey) {
                     l.classList.remove('text-blue-600', 'border-blue-600');
                 }
            });
            if (pageKey === 'home') renderHomePage();
            else if (['politics', 'business', 'education', 'technology'].includes(pageKey)) renderCategoryPage(pageKey);
            window.scrollTo(0, 0);
            document.getElementById('search-input').value = '';
        }, 300);
    }
    
    function addShareListeners(article) {
        const articleUrl = window.location.href; 
        const articleTitle = getTranslated(article, 'title');
        
        const shareLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`,
            whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + " " + articleUrl)}`
        };

        document.querySelectorAll('[data-sharer]').forEach(link => {
            const platform = link.dataset.sharer;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(shareLinks[platform], 'share-window', 'height=450,width=550,toolbar=0,location=0,menubar=0,directories=0,scrollbars=0');
            });
        });
    }
    
    function enterReaderMode(article) {
        const readerView = document.getElementById('reader-view');
        let fontSize = 1; 
        function renderReaderContent() {
             readerView.innerHTML = `<div class="max-w-3xl mx-auto p-8"><div class="flex justify-between items-center mb-8"><button id="exit-reader-btn" class="bg-slate-200 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-300">Exit Reader Mode</button><div class="flex items-center space-x-2"><button id="font-decrease-btn" class="w-10 h-10 border rounded-md flex items-center justify-center">-A</button><button id="font-increase-btn" class="w-10 h-10 border rounded-md flex items-center justify-center">+A</button></div></div><h1 class="text-4xl font-bold mb-6">${getTranslated(article, 'title')}</h1><div id="reader-content" class="prose max-w-none text-lg leading-relaxed" style="font-size: ${fontSize}rem;">${getTranslated(article, 'content')}</div></div>`;
             document.getElementById('exit-reader-btn').addEventListener('click', exitReaderMode);
             document.getElementById('font-increase-btn').addEventListener('click', () => { fontSize += 0.1; document.getElementById('reader-content').style.fontSize = `${fontSize}rem`; });
             document.getElementById('font-decrease-btn').addEventListener('click', () => { fontSize -= 0.1; document.getElementById('reader-content').style.fontSize = `${fontSize}rem`; });
        }
        renderReaderContent();
        readerView.classList.remove('hidden');
        document.body.classList.add('reader-mode-active');
    }

    function exitReaderMode() {
        document.getElementById('reader-view').classList.add('hidden');
        document.body.classList.remove('reader-mode-active');
    }

    function init() {
        mainContent = document.getElementById('main-content');
        footer = document.getElementById('footer');
        searchInput = document.getElementById('search-input');
        
        renderFooter();
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(link.dataset.page);
            });
        });
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const articles = document.querySelectorAll('.article-card, .article-list > a');
            let resultsFound = false;
            articles.forEach(article => {
                const title = article.dataset.title.toLowerCase();
                if (title.includes(searchTerm)) {
                    article.style.display = 'flex';
                    resultsFound = true;
                } else {
                    article.style.display = 'none';
                }
            });
            const noResultsEl = document.getElementById('no-results');
            if (noResultsEl) {
                noResultsEl.style.display = resultsFound ? 'none' : 'block';
                noResultsEl.textContent = currentLang === 'eng' ? `No results for "${searchTerm}"` : `"${searchTerm}" ምንም ውጤት አልተገኘም`;
            }
        });

        document.getElementById('lang-eng').addEventListener('click', (e) => { e.preventDefault(); switchLanguage('eng'); });
        document.getElementById('lang-amh').addEventListener('click', (e) => { e.preventDefault(); switchLanguage('amh'); });
        
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const lightIcon = document.getElementById('theme-toggle-light-icon');
        const darkIcon = document.getElementById('theme-toggle-dark-icon');

        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            if(lightIcon) lightIcon.classList.remove('hidden');
            if(darkIcon) darkIcon.classList.add('hidden');
        } else {
            if(lightIcon) lightIcon.classList.add('hidden');
            if(darkIcon) darkIcon.classList.remove('hidden');
        }

        darkModeToggle.addEventListener('click', () => {
            lightIcon.classList.toggle('hidden');
            darkIcon.classList.toggle('hidden');
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('color-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });

        const dateElement = document.getElementById('current-date');
        dateElement.textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()) + " | Addis Ababa";
        
        navigateTo('home');
    }

    init();
});