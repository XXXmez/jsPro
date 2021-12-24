const postData = async (url, data) => {                 // отвечает за постинг данных (отправку на сервер) / async - предупреждаем что тут будет асинхрон.
    const result = await fetch(url, {                   // await - нужно ждать загрузки этого кода
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await result.json();                         // тоже ждем
};

async function getResource(url) {                 // отвечает за постинг данных (отправку на сервер) / async - предупреждаем что тут будет асинхрон.
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();                      // тоже ждем
};

export {postData};
export {getResource};