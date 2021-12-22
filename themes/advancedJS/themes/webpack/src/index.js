const myModule = require('./script/main');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

// галп планировщик задач с помощью него можно создавать различные таски, он не умеет собирать скрипты
// вебпак же сборщик модулей его запускают для сборки проекта