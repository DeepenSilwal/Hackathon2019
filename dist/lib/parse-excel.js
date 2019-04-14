'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const excelToJson = require('convert-excel-to-json');
function parseexcel(item) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            try {
                const output = excelToJson({
                    sourceFile: './testdata/excel/worldcities.xlsx',
                    header: {
                        rows: 1
                    }
                });
                resolve(output);
            }
            catch (error) {
                console.error(error);
            }
        });
    });
}
exports.parseexcel = parseexcel;
//# sourceMappingURL=parse-excel.js.map