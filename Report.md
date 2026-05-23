Сайт VulcanoMC

##  App.jsx
### Основные состояния:
*   `page`: отвечает за текущую открытую вкладку (маршрутизация).
*   `user`: хранит данные авторизованного игрока.

### Метод `handleLogin` (Вход в систему):
```javascript
const handleLogin = (username) => {
    const u = {
        username: username || 'Player', 
        balance: 1000, 
        rank: 'Игрок'
    };
    setUser(u); 
    localStorage.setItem('user', JSON.stringify(u)); 
    setPage('profile'); 
};
```
Принимает имя пользователя, создает объект профиля с начальными данными и сохраняет его в `localStorage`, чтобы сессия не сбрасывалась при обновлении страницы.

### Метод `handleBuy` (Покупка в магазине):
```javascript
const handleBuy = (item) => {
    if (!user) return alert('Войдите в аккаунт!');
    if (user.balance < item.price) return alert('Недостаточно средств!');
    
    const updated = {
        ...user, 
        balance: user.balance - item.price,
        rank: item.name.includes(':') ? item.name.split(': ')[1] : item.name
    };
    
    setUser(updated); 
    localStorage.setItem('user', JSON.stringify(updated));
};
```
Проверяет наличие пользователя и средств. Использует оператор `spread` (`...user`) для создания нового объекта, обновляет баланс и извлекает название ранга из строки товара.
## Home.jsx
```javascript
useEffect(() => {
    fetch('https://api.mcsrvstat.us/3/vulcanomc.ru')
        .then(res => res.json())
        .then(data => setStatus(data));
}, []);
```
Использует `fetch` для запроса к внешнему API. Хук `useEffect` гарантирует, что запрос уйдет только один раз при загрузке.
## Auth.jsx
```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
        onLogin(username);
    } else {
        alert('Пожалуйста, заполните все поля');
    }
};
```
Предотвращает стандартную перезагрузку формы (`e.preventDefault()`), проверяет поля на пустоту и вызывает метод `onLogin`, переданный из родительского компонента `App`.
## Profile.jsx
```javascript
<img src={`https://mc-heads.net/avatar/${user.username}/100`} alt="Avatar" />
```
Используется сервис `mc-heads.net` для динамического получения головы игрока по его никнейму.
## Leaderboard.jsx, Shop.jsx

```javascript
{LEADERBOARD_DATA.map((p, i) => (
    <tr key={p.id}>
        <td>{i+1}</td>
        <td>{p.username}</td>
        {/* ... */}
    </tr>
))}
```
Метод `.map()` преобразует массив данных из `mockData.js` в массив JSX-элементов (строк таблицы или карточек товаров). Каждому элементу присваивается уникальный `key` для корректной работы React DOM.

