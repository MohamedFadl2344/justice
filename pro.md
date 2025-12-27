ده تصميم الصفحة اللي انت هتشغل عليها بنفس الشكل والمكونات الموجودة التقنيات اللي هنكتب بيها الكود بشكل نظيف هي 
tailwind css -react - typscript 
قمت بتثبيت المكتبات المطلوبه للمشروع تقدر تراجعها من هنا 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\package.json

ركز معايا اخر اصدار من tailwind مبقاش بيعتمد علي ملف config اساسا فياريت تركز في كدا فانت هضيف الالوان المخصصه داخل الكلاس عن طريق اضافة كدا مثلا bg-[#101622] فاهم علي حسب اللون اللي انت شايفة في الصفحة بقا وطريقة التقسيم تاني شي عايزك  تخلي navbar تبقي قائمة جانبيه علي الهواتف تمام بص ركز معايا بقا 

هنا هنبدا في فصل مسؤاليات كل قسم 
بالنسبة لل navbar and footer 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\layout\footer\footersection
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\layout\navbar\navbarsection

هنا التجميع 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\layout\navbar\Navbar.tsx
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\layout\footer\Footer.tsx

بالنسبة بقا 
الي باقي الاقسام هنا فصل المسؤاليات 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\about
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\about\commitmentsection
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\contact\contactsection
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\hero\herosection
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\services\servicessection
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\statistics\statisticssection
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\testimonials\testimonialssection

هنا التجميع بقا علي حسب كل قسم طبعا 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\testimonials\Testimonials.tsx
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\statistics\Statistics.tsx
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\services\Services.tsx
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\hero\Hero.tsx
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\contact\Contact.tsx
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\components\features\about\About.tsx

هنا هنبدا نجمع بقا الاقسام كلها في النهايه 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\pages\Home.tsx

لي هنعمل كدا علشان صفحات الدعم هتبقي منفصلة فمش دورها حاليا تمام 

هنا بقا هنبدا نضيفهم علشان نشغل المشروع 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\App.tsx

كود  نظيف احترافي متجاوب قابل للصيانة والتطوير ده مهم جدا  كدا كل حاجه بقت واضحة تمام 

بالنسبة للوضع الليلي فانا مثبت مكتبة 
dark-mode-toggler
دي اللي هنستخدمها بص هتلاقي فمكونات هتحتاج hooks فلازم تعمل حسابك من البدايه هنا 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\src\hooks
دي الصورة اللي انت هتحتجها في التصميم تمام 
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\public\image\hero\hero.webp
D:\Front_End_Review\react_project\react_project\Landing pages react\Law offices\justice\public\image\about\whyabout.webp

الخط هيكون cairo وانا ضفته هنا 
@index.css#L1-2 

طبعا انت هنا هتغير الالوان دي 
@index.css#L18-29 

تمام كدا ابدا بقا 