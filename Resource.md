


### Display:grid
Display:grid- elementləri həm sütün həm sətir üzrə yiğmaq, ölçü vermək, aralıq təyin etmək, seçilmiş elementlərə eyni stilləri vermək mümkündür. grid-column-sütun üzrə, grid-row sətir üzrə dəyərlər verir. gap-araliq təyin etmək üçündür(həm sütünlara həm sətirlərə). column-gap sütunlara, row-gap sətirlərə aralıq verir. Elementlər arasında cizgilər çəkilir və adlandırılır(nömrələnir), grid-column-start və grid-column-end (grid-row-start və grid-row-end) kodlarına verdiyimiz cizgi adları boyunca elementin ölçüsünü dəyişir.
grid-template-columns sütunlar üzrə, grid-row-columns sətirlər üzrə ölçülər verir.
justify-content, align-content özəliklərini verə bilərik.
max-content: content qədər genişlik ya da hündürlük yaradır.
min-content: Ən geniş söz qədər minimum yer yaradır.
grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));-20 rem araligında maxsimum cox qutu olsun

### Display-flex
Display-flexin bir neçə alt xüsusiyyəti var. Elementləri sütunlar və sətirlər üzrə düzmək üçün istifadə olunur. Defaul olaraq sətirlər üzrə bölünür bu zaman "row" dəyərini alır və səhifənin solundan sağa qutular düzülür. Sağından sola düzülüş olması üçün isə row-reverse xüsusiyyətindən istifadə olunur. Sütunlar üzrə bölmək üçün isə "column" xüsusiyyətindən istifadə olunur. oda öz növbəsində iki alt xüsusiyyətə bölünür. Yuxarında aşağı bölmək üçün default column, tərsinə bölmək üçün "column-reverse" istifadə olunur.
Display flexin başqa bir xüsusiyyəti isə elementləri vertical və horizantal formada düzməkdir. Justify-content elementləri verticalda bölmək üçün istifadə olunur.Oda öz növbəsində elementləri verticalda centere yığmaq üçün "center" , səhifədə sağda və solda yığmaq üçün space-between, səhifədə solda və sağda fərqli formada yığmaq üçün isə spacee-around funksiyanınnan istifadə olunur və s kimi flex-end çflex start . Elementlərin horizontalda düzülməsinə isə "align-item" nəzarət edir. Oda öz növbəsində elementləri alt xüsusiyyətlərə- mərkəzə çəkmək üçün center, defaul olaraq flex-startç sona çəkmək üçün flex-end vəs bölünür.


### Dsiplay:flex ve Display:grid arasındakı fərq
Ən böyük fərq responsizlikdir, Dsiplay:grid responsivdir.
bir neçə block elementlər vardır. Bu elementlər səhifə üzərində bütün sətri tutur, display: inline-block bu elementləri ard-arda yığır, bele olan halda daha çox kod yazmalı oluruq. Beləki elementlər arasında məsafələr vermək, yerlərini təyin etmək daha çox vaxt aparırdı.
Dsiplay:flex elementləri sətir vəya sütün üzərində işləməsini təmin edir.
Display:grid daha geniş və daha funksiyonaldı, elemntləri həm sətir, həmdə sütun üzərində işləməyə imkan verir.
Əgər bir saytın yığılması üçün hansından istifadə etməyi seçəsi olsam 1-ci sayta mümkün olan bir neçə wireframe çəkərəm, elementlərin yerləşməsi, ölçüləri, aralarındakı məsafəyə uyğun seçim edərəm. Çalışdığım qədər "Display:grid" dən isifadə edərəm daha funksiyonallı olduğu üçün, (mən elə düşünürəm, yəqin ki, bir neçə tapşırıq edəndən sonra dəqiqləşdirəcəm)