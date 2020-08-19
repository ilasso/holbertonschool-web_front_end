# **Responsive design**

## *Implement the basic characteristics of responsive design, based on the Wireframe of the Techium project*

#### The image that you see below gives an idea of ​​the final result that is achieved

 ![Click to See](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/a1f906a6a39eba8cb2f3d2877abc9ea84be51d9d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200819T011240Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5f6313e0d1a6e3fd70fd253e4c806055455fd16e7524e523383096e872c372b1)

### To achieve this, the following steps were carried out

#### Fix the hero banner [0-index.html](https://github.com/ilasso/holbertonschool-web_front_end/blob/master/0x06-responsive_design/01-index.html), [01-styles.css](https://github.com/ilasso/holbertonschool-web_front_end/blob/master/0x06-responsive_design/01-styles.css)

Final rendering of the Hero section should look something like this:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/f464d8346c36134ec4ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200819T011240Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6bb9644b5776ee0d200845efdc57270de22f1dc5b84397abed7bc5e1e092d83a)


#### Make the container flexible  [02-styles.css](https://github.com/ilasso/holbertonschool-web_front_end/blob/master/0x06-responsive_design/02-styles.css),   [02-index.htm](https://github.com/ilasso/holbertonschool-web_front_end/blob/master/0x06-responsive_design/02-index.html)

If you resize your browser, you should see that the content is resizing.

Wide screen:
![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/5356d9d9b1de3ef692a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200819T011240Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=914c96645c379dd018f6ad7f09329ffab22d7251b229c91a1604266277fd2644)

Narrow screen

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/9aeb51d5b4c9586ea05a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200819T011240Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=380fcc1813261d8ddaad3b501078f7e1fa74ea38367f409a085a980d62b061eb)

##### Fix layout issues [02-1-index.htm](https://github.com/ilasso/holbertonschool-web_front_end/blob/master/0x06-responsive_design/02-1-index.html), [02-1-styles.css](https://github.com/ilasso/holbertonschool-web_front_end/blob/master/0x06-responsive_design/02-1-styles.css)

Rendering on screen with max-width: 767px:
![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/741a7a68af4e92b5c286.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200819T011240Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c669fb245bc64d29504dd41856bf51cfaebe85a54741f5f9d17abd6378eebf3b)

> * ##### Generate images with responsive breakpoints
> * ##### Create the mobile icon and hide the menu
> * ##### Hamburger!
> * ##### Add the behavior based on menu-btn state
> * #####  Make the font size responsive
> * ##### Improve the "Works" section
> * ##### Improve the "Footer" section
> * ##### Fix the top header background

## **Invoke**

```
sandpiles_sum(grid1, grid2);
```


Where:
```
int grid1[3][3], int grid2[3][3]
```
## **Output**

In grid1 there is the result of adding grid1 and grid2, if grid1 is stable, then that will be the result, if it is not stable, the algorithm is applied until the resulting matrix is ​​stable, destroying all cells that have more than 3 grains

### Examples
```
0 0 0   3 3 3
0 0 0 + 3 3 3
0 0 0   3 3 3
=
3 3 3
3 3 3
3 3 3
```
```
3 3 3   1 3 1
3 3 3 + 3 3 3
3 3 3   1 3 1
=
4 6 4
6 6 6
4 6 4
=
2 5 2
5 6 5
2 5 2
=
4 2 4
2 6 2
4 2 4
=
0 5 0
5 2 5
0 5 0
=
2 1 2
1 6 1
2 1 2
=
2 2 2
2 2 2
2 2 2
```

## **Compiling**
```
gcc -Wall -Wextra -Werror -pedantic 0-main.c 0-sandpiles.c -o 0-sandpiles
```

## **Usage**

```
./sandpiles
```
## Scope

>* Ubuntu 14.04 LTS
> * Compiled with gcc 4.8.4
> * grid1 and grid2 are individually stable
> * A sandpile is considered stable when none of its cells contains more than 3 grains
> * When the function is done, grid1 must be stable
> * grid1 must be printed before each toppling round, only if it is unstable

## Author

**Ivan Dario Lasso Gil** - :email: [Email](mailto:ivan-dario.lasso-gil@holbertonschool.com)


## Licence

Public Domain. No copy write protection.
