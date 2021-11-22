


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

### 22.11.2021
### 1. Display:inline və display:inline-block arasında fərqlər nədir?
Ən böyük fərq display:inline-block elementlərində genişlik və uzunluq verə bilirik. Display:inline isə olmur.
https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1
bu hissəyə baxandan sonra tam olaraq başa düşdüm "display: inline" "display: inline-block" və "display: block" arasındakı fərqi.
"display: inline"-elementlər yan yana gəlir. widht və height funksiyalarını dəstəkləmir. Padding, margin funksiyalarını dəstəkləyir. <span><a><i>
"display: inline-block"-elementlər yan yana gəlir.  widht, height, padding, margin funksiyalarını dəstəkləyir.
"display: block"-elementlər ekranı sətir boyunca tutur. widht, height, padding, margin funksiyalarını dəstəkləyir.<div>, <p>, <ul>, <li>

### semantik veb nə deməkdir izah edin
web 3.0 texnologiyasıdır. Yəni müştəririn girdiyi yerə görə bizə məlumat gətirir. məsələn mən bir xəbər saytına girirəm onun sağ və sol tərəfində reklam çıxır, baxıram ki, mən bəyaq buna hardasa baxmışam. müştərinin keçmişdə maraqlandığı məlumatlara görə məlumat verir.

### HTML taq ve attribute arasındakı fərqlər nələrdir?
Bütün HTML taq-lərinin atributları ola bilər. məsələn keçid üçün istifadə etdiyimiz <a href="google.com">Google giris yap</a> da
a-taq, href isə attributdur. 
şəkil əlavə etdiyimiz <img src="/img" width=500px height=400px>
img-taq, src, width, height isə attributdur.

### <!DOCTYPE html> nədir? Nə üçün istifadə edilir?
internet brauzeleri terefinden sehifenin tipini daha asanliqla aydınlanması üçün istifadə edilir. <html> dən əvvəl yazılır.
yəni kodlarımızın hansı HTML versiyasında yazılmasını brauzerə məlumat verir. Bununlada kodlarımızın daha tez, daha düzgün yüklənməsinə və işlənməsinə şərait yaradır.
HTML5 üçün Doctype kodu-<!DOCTYPE html>


### css-də istifadə olunan inherit və initial ifadələrinin mənasını araşdırın yazın
CSS-də bütün xüauaiyyətləri təyin edilmiş 4 dəyər vardır. inherit initial unsert və revert.
inherit- dəyəri verdikdə ö

