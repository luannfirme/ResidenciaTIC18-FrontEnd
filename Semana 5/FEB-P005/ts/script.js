var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function ObterTemperaturaAtual() {
    return __awaiter(this, void 0, void 0, function () {
        var resposta, temperatura, temperaturaAtual, descricaoTempoAtual, tempMaximaHoje, tempMinimaHoje, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://api.openweathermap.org/data/3.0/onecall?lat=-14.796581726513459&lon=-39.173008679879025&exclude=minutely,hourly&units=metric&appid=70fd9d2c18a3ccd0fadf64377139e91d&lang=pt_br')];
                case 1:
                    resposta = _a.sent();
                    return [4 /*yield*/, resposta.json()];
                case 2:
                    temperatura = _a.sent();
                    temperaturaAtual = Math.round(temperatura.current.temp) + 'ºC';
                    descricaoTempoAtual = temperatura.current.weather[0].description.charAt(0).toUpperCase() + temperatura.current.weather[0].description.slice(1);
                    tempMaximaHoje = Math.round(temperatura.daily[0].temp.max) + 'ºC';
                    tempMinimaHoje = Math.round(temperatura.daily[0].temp.min) + 'ºC';
                    return [2 /*return*/, { temperaturaAtual: temperaturaAtual, descricaoTempoAtual: descricaoTempoAtual, tempMaximaHoje: tempMaximaHoje, tempMinimaHoje: tempMinimaHoje }];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erro com a chamada fetch: ', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function obterNoticias() {
    return __awaiter(this, void 0, void 0, function () {
        var resposta, noticias, titulosELinks, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=e10349f1a5334964a73e16a7740b669a&q=Universidade Estadual de Santa Cruz&language=pt')];
                case 1:
                    resposta = _a.sent();
                    return [4 /*yield*/, resposta.json()];
                case 2:
                    noticias = _a.sent();
                    titulosELinks = noticias.articles.map(function (noticia) {
                        return {
                            titulo: noticia.title,
                            link: noticia.url
                        };
                    });
                    return [2 /*return*/, titulosELinks];
                case 3:
                    error_2 = _a.sent();
                    console.error('Erro com a chamada fetch: ', error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var divNoticias = document.getElementById('listaNoticias');
var divServicos = document.getElementById('listaServicos');
ObterTemperaturaAtual().then(function (temp) {
    var retornoTemperatura = "Temperatura atual:<br>\n    <b><font size='15'>".concat(temp === null || temp === void 0 ? void 0 : temp.temperaturaAtual, "</font></b><br>\n    <b>").concat(temp === null || temp === void 0 ? void 0 : temp.descricaoTempoAtual, "</b><br>\n    M\u00E1x.: <font color='red'>").concat(temp === null || temp === void 0 ? void 0 : temp.tempMaximaHoje, "</font> &nbsp;&nbsp; Min.:<font color='blue'> ").concat(temp === null || temp === void 0 ? void 0 : temp.tempMinimaHoje, "</font><br>");
    if (divServicos) {
        divServicos.innerHTML = retornoTemperatura;
    }
});
obterNoticias().then(function (noticias) { return noticias.forEach(function (noticia) {
    var novaNoticia = document.createElement("a");
    novaNoticia.innerHTML = "<b>".concat(noticia.titulo, "</b><br>");
    novaNoticia.href = "".concat(noticia.link);
    novaNoticia.target = '_blank';
    if (divNoticias) {
        divNoticias.appendChild(novaNoticia);
    }
}); });
