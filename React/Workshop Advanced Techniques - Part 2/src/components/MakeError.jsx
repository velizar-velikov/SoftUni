export default function MakeError() {
    if (Math.random() < 0.5) {
        throw new Error('This is a major error occurring');
    }

    return null;
}
