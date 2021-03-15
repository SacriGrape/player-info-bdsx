"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PseudoRandom = void 0;
class PseudoRandom {
    constructor(n) {
        this.n = n;
    }
    srand(n) {
        this.n = n;
    }
    rand() {
        this.n = ((this.n * 214013) | 0 + 2531011) | 0;
        return (this.n >> 16) & PseudoRandom.RAND_MAX;
    }
}
exports.PseudoRandom = PseudoRandom;
PseudoRandom.RAND_MAX = 0x7fff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHNldWRvcmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHNldWRvcmFuZG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE1BQWEsWUFBWTtJQUdyQixZQUFvQixDQUFRO1FBQVIsTUFBQyxHQUFELENBQUMsQ0FBTztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQVE7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDbEQsQ0FBQzs7QUFiTCxvQ0FjQztBQWIwQixxQkFBUSxHQUFHLE1BQU0sQ0FBQyJ9