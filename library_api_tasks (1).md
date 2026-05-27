# Номын сангийн систем — API & Сервер Кодын Даалгаврууд

---

## I хэсэг: app.js — Сервер тохиргоо

**1.** `express` модулийг импортлож, `app` үүсгэ. JSON болон URL-encoded body уншихаар тохируулсан кодыг бич.

---

**2.** Дараах route-уудыг `app.js`-д холбосон кодыг бич:
- `/api/members` → `memberRoutes`
- `/api/books` → `bookRoutes`
- `/api/loans` → `loanRoutes`
- `/api/authors` → `authorRoutes`

---

**3.** Серверийг `3000` порт дээр асааж, консолд `"Сервер ажиллаж байна"` гэж хэвлэдэг кодыг бич.

---

## II хэсэг: config/db.js — Өгөгдлийн сан холболт

**4.** `mysql2` ашиглан MySQL-тэй connection pool үүсгэж, `module.exports`-оор гаргах `db.js` файлын кодыг бич. (host, user, password, database утгуудыг хэрэглэ)

---

**5.** `db.js`-г ашиглан `Гишүүн` хүснэгтийн бүх өгөгдлийг авах `async` функцийн кодыг бич.

---

## III хэсэг: Model — Өгөгдлийн давхарга

**6.** `MemberModel` объект үүсгэж, дараах 4 функцийг дотор нь бич:
- `getAll()` — бүх гишүүн
- `getById(id)` — ID-аар хайх, олдоогүй бол `null`
- `create({нэр, утас, и_мэйл, бүртгэсэн_огноо})` — шинэ гишүүн нэмж `insertId` буцаана
- `delete(id)` — устгаж `affectedRows` буцаана

---

**7.** `BookModel`-д ном хайх `search(түлхүүр)` функцийг бич. Гарчиг, ISBN, зохиолчийн нэрийн аль нэгэнд тохирвол буцаана.

---

**8.** `MemberModel`-д тухайн гишүүний одоогоор буцаагаагүй зээлдэлтийн тоог буцаадаг `getActiveLoanCount(гишүүн_id)` функцийг бич.

---

**9.** `LoanModel`-д ном буцаах `returnBook(id)` функцийг бич. Торгуулийн тооцоо: буцаах хугацаа хэтэрсэн хоног тус бүрт **500₮**. Хугацаандаа буцаавал торгууль `0`.

---

**10.** `BookModel`-д тухайн номын зээлдэх боломжтой хувийн тоог буцаадаг `getAvailableCount(ном_id)` функцийг бич. (`хувь_тоо` − идэвхтэй зээлдэлтийн тоо)

---

**11.** `LoanModel`-д хугацаа хэтэрсэн бүх зээлдэлтийг авах `getOverdue()` функцийг бич. Гишүүний нэр, утас болон номын гарчиг мэдээллийг хамт буцаана.

---

## IV хэсэг: Controller — Бизнесийн логик

**12.** `memberController.js`-д `getAll` функцийг бич. Амжилттай бол `200` статус буцаана.

---

**13.** `memberController.js`-д `getById` функцийг бич. `req.params`-аас `id`-г авч, model-аас хайн `200` статустай буцаана.

---

**14.** `memberController.js`-д `create` функцийг бич. `req.body`-гоос өгөгдөл авч, шинэ гишүүн нэмж `201` статустайгаар буцаана.

---

**15.** `loanController.js`-д зээлдэлт бүртгэх `createLoan` функцийг бич. Дараах **4 шалгалтыг** дарааллаар хийгээд амжилттай бол `201` буцаана:
1. Гишүүн байгаа эсэх
2. Ном байгаа эсэх
3. Номын боломжтой хувь байгаа эсэх
4. Гишүүний идэвхтэй зээлдэлт 4-өөс хэтрээгүй эсэх

---

**16.** `loanController.js`-д ном буцаах `returnBook` функцийг бич. `req.params`-аас `id`-г авч `LoanModel.returnBook(id)`-г дуудаж `200` буцаана.

---

**17.** `loanController.js`-д хугацаа хэтэрсэн зээлдэлтүүдийг буцаадаг `getOverdue` функцийг бич.

---

**18.** `bookController.js`-д ном хайх `search` функцийг бич. `req.query`-гаас `q` параметрийг авч `BookModel.search(q)`-г дуудан `200` буцаана.

---

**19.** `memberController.js`-д гишүүний мэдээллийг засах `update` функцийг бич. `req.body`-гоос өгөгдөл авч `200` буцаана.

---

**20.** `memberController.js`-д гишүүн устгах `remove` функцийг бич. `req.params`-аас `id`-г авч `MemberModel.delete(id)`-г дуудан `200` буцаана.

---

## V хэсэг: Routes — Маршрут тодорхойлолт

**21.** `memberRoutes.js`-д дараах бүх route-уудыг тодорхойлсон кодыг бич:

| Method | URL | Controller функц |
|--------|-----|-----------------|
| GET | `/` | `getAll` |
| GET | `/:id` | `getById` |
| POST | `/` | `create` |
| PUT | `/:id` | `update` |
| DELETE | `/:id` | `remove` |

---

**22.** `loanRoutes.js`-д дараах route-уудыг тодорхойлсон кодыг бич:

| Method | URL | Controller функц |
|--------|-----|-----------------|
| GET | `/` | `getAll` |
| GET | `/overdue` | `getOverdue` |
| GET | `/:id` | `getById` |
| POST | `/` | `createLoan` |
| PATCH | `/:id/return` | `returnBook` |

---

**23.** `routes/index.js` файл үүсгэж, бүх route-уудыг нэгтгэсэн кодыг бич. `app.js`-д `app.use('/api', router)` гэж нэг мөрөөр холбоно.

---

**24.** Нэг гишүүний зээлдэлтийн бүх түүхийг авах route-ыг `memberRoutes.js`-д нэмэх кодыг бич.
```
GET /api/members/:id/loans
```

---

## VI хэсэг: Middleware

**25.** JWT токен шалгадаг `verifyToken` middleware функцийг бич. `Authorization: Bearer <token>` header-ийг задлан токеныг авч `jwt.verify()` ашиглан шалгана. Амжилттай бол `req.user`-т decoded payload хадгалж `next()` дуудна.

---

**26.** Үүрэг (role) шалгадаг `checkRole(role)` middleware функцийг бич. `req.user.role` нь шаардсан үүрэгтэй тохирвол `next()` дуудна.

---

**27.** `loanRoutes.js`-д зээлдэлт бүртгэх болон ном буцаах route-уудад `verifyToken` middleware нэм.

---

**28.** Ажилтны route-д зөвхөн `"admin"` үүрэгтэй хэрэглэгч гишүүн устгах боломжтой байхаар `verifyToken` болон `checkRole`-ыг хамт ашиглах route-ын кодыг бич.

---

## VII хэсэг: Бизнесийн дүрэм

**29.** `utils/fineCalculator.js` файл үүсгэж, торгуулийг тооцоолох `calculateFine(буцаах_огноо, буцаасан_огноо)` функцийг бич. Өдөрт **500₮**, хугацаандаа буцаавал `0` буцаана. Энэ функцийг `LoanModel`-д импортлон ашиглана.

---

**30.** `utils/validators.js` файл үүсгэж, `буцаах_огноо` нь өнөөдрөөс хожуу байгаа эсэхийг шалгадаг `isValidReturnDate(огноо)` функцийг бич.

---

## VIII хэсэг: Нэгтгэсэн даалгаврууд

**31.** `authorController.js`-д зохиолч нэмэх `create` болон бүх зохиолчийн жагсаалтыг авах `getAll` функцийг бич.

---

**32.** `bookController.js`-д ном нэмэхдээ зохиолчийг мөн хамт холбодог `create` функцийг бич. Дараах дарааллаар хий:
1. Ном нэмнэ → `insertId` авна
2. `зохиолч_id`-уудыг `Ном_Зохиолч` хүснэгтэд холбоно

---

**33.** `loanController.js`-д тухайн гишүүний зээлдэлтийн бүх түүхийг буцаадаг `getByMember` функцийг бич. `req.params`-аас `id`-г авна.

---

**34.** `bookController.js`-д номын боломжтой хувийн тоог буцаадаг `getAvailable` функцийг бич.
```
GET /api/books/:id/available
```

---

**35.** `app.js`-д бүх middleware болон route-уудыг зөв дарааллаар бүртгэсэн бүтэн файлын кодыг бич. Дараалал:
1. `express.json()`
2. Route-ууд

---

**36.** Дараах бүтэцтэй `library-api` төслийн `package.json`-д хэрэгтэй бүх dependency болон script-уудыг бич:
- **Dependencies:** `express`, `mysql2`, `jsonwebtoken`, `dotenv`
- **DevDependencies:** `nodemon`
- **Scripts:** `start`, `dev`
