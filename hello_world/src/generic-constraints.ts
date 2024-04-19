function echo<T extends number | boolean> (value: T):T {
    return value;
}

echo(true);