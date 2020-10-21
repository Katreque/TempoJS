// @flow

function foo(x: ?number): string {
    if (x) {
        return 'a';
    }
    return 'default string';
}
