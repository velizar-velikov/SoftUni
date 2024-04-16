namespace Greeter {
    export interface Greeting<T> {
        introduction(): string;
        sayGoodbye(name: T): string;
    }

    export class Tester {
        test: string;
        constructor(test: string) {
            this.test = test;
        }

        getNameLength() {
            return this.test.length;
        }
    }
}
