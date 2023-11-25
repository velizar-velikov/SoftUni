function editElement(refenrence, str, replacer) {
    refenrence.innerHTML = refenrence.innerHTML.split(str).join(replacer);
}