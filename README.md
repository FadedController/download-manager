# dir-sort

This package is really simple. It creates an event listener in whatever folder you want on your local system, then sorts any new file on that folder by file extension. For example

New index.html file will create an html folder and put the file there (html/index.html)

Similarly, a new image.png file will create a png folder and put the file there (png/image.html)

This package is intended for using in the downloads folder, where you usually have a lot of files of different extensions that are not really sorted in any way, so file extension is viable

To use it:

```bash
$ FOLDER=/path/to/folder npx dir-sort
```
