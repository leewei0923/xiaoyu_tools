# Welcome to Xiaoyu's Tools

## Introduction

- gradient Color Palette
- componentDemos
  - bytadance_mileStone



## Development history

### bytadance_mileStone

- 第一阶段

  基本完成对应的功能，点击按钮就可以切换内容。



其中有一段这样的代码看着十分的麻烦，很多代码都是重复的，进行了如下的操作，重构代码。

```typescript
const onMouseUp = (e: number) => {
    switch (e) {
      case 1:
        if (scaleCarouse2Index >= backgroundData.length - 1) {
          setScaleCarouse2Index(backgroundData.length - 1);
        } else {
          setScaleCarouse2Index(scaleCarouse2Index + e);
        }
        setCarouse1OffsetX(0);
        break;
      case -1:
        if (scaleCarouse2Index <= 0) {
          console.log(scaleCarouse2Index);
          setScaleCarouse2Index(0);
        } else {
          console.log("k")
          setScaleCarouse2Index(scaleCarouse2Index + e);
        }
        setCarouse1OffsetX(0);
        break;
      case 0:
        setScaleCarouse2Index(scaleCarouse2Index);
        setCarouse1OffsetX(0);
        break;
      default:
        break;
    }
    setScaleCarouse2Index(scaleCarouse2Index + e);

    console.log(e);
  };
```

重新思考之后，寻找重复的语句，尝试复用和删除。然后精简许多，但是很多if-else看着就很头疼

```typescript
const onMouseUp = (e: number) => {
    if (scaleCarouse2Index+e <= 0) {
      setScaleCarouse2Index(0);
    } else if (scaleCarouse2Index+e >= backgroundData.length - 1) {
      setScaleCarouse2Index(backgroundData.length - 1);
    } else {
      if (e === 0) {
        setScaleCarouse2Index(scaleCarouse2Index);
      } else {
        setScaleCarouse2Index(scaleCarouse2Index + e);
      }
    }
    setCarouse1OffsetX(0);
  };
```



今天基本完成这个功能，不过还是需要兼容其他的屏幕，目前在我的电脑上显示正常，还需要更多的测试。接下来适配1000px以下的电脑。

