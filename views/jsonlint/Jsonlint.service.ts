import { boundMethod } from 'autobind-decorator';
import copy from 'copy-to-clipboard';
import { useTemplateRef } from '#imports';

export class JsonlintService {
  public containerRef = useTemplateRef<HTMLDivElement>('container');
  public textarea1Ref = useTemplateRef<HTMLTextAreaElement>('textarea1');
  public textarea2Ref = useTemplateRef<HTMLTextAreaElement>('textarea2');

  public input = '';
  public output = '';
  public copyTooltipInput = '点击复制';
  public copyTooltipOutput = '点击复制';
  public decodeError = false;

  @boundMethod
  public handleBeautify() {
    if (this.input) {
      try {
        const json = JSON.parse(this.input);
        this.decodeError = false;
        this.output = JSON.stringify(json, null, 4);
      } catch (e) {
        this.decodeError = true;
        this.output = `json解析异常，请检查输入。${e}`;
      }
    } else {
      this.decodeError = true;
      this.output = '无效的json字符串';
    }
  }

  @boundMethod
  public handleEval() {
    if (this.input) {
      try {
        const json = eval(`(${this.input})`);
        this.decodeError = false;
        this.output = JSON.stringify(json, null, 4);
      } catch (e) {
        this.decodeError = true;
        this.output = `json解析异常，请检查输入。${e}`;
      }
    } else {
      this.decodeError = true;
      this.output = '无效的json字符串';
    }
  }

  @boundMethod
  public handleMinify() {
    if (this.input) {
      try {
        const json = JSON.parse(this.input);
        this.decodeError = false;
        this.output = JSON.stringify(json, null, 0);
      } catch (e) {
        this.decodeError = true;
        this.output = `json解析异常，请检查输入。${e}`;
      }
    } else {
      this.decodeError = true;
      this.output = '无效的json字符串';
    }
  }

  @boundMethod
  public handleSwap() {
    const tmp = this.input;
    this.input = this.output;
    this.output = tmp;
  }

  @boundMethod
  public handleEmptyInput() {
    this.input = '';
  }

  @boundMethod
  public handleCopyInput() {
    copy(this.input);
    this.copyTooltipInput = '复制成功';
    setTimeout(() => {
      this.copyTooltipInput = '点击复制';
    }, 2000);
  }

  @boundMethod
  public handleEmptyOutput() {
    this.output = '';
  }

  @boundMethod
  public handleCopyOutput() {
    copy(this.output);
    this.copyTooltipOutput = '复制成功';
    setTimeout(() => {
      this.copyTooltipOutput = '点击复制';
    }, 2000);
  }

  @boundMethod
  public handleMousedownInput() {
    if (
      this.textarea1Ref.value &&
      this.textarea2Ref.value &&
      this.containerRef.value
    ) {
      const computedStyle = window.getComputedStyle(this.containerRef.value);
      if (computedStyle.getPropertyValue('flex-direction') === 'column') {
        return;
      }
      const h1 = this.textarea1Ref.value.style.height;
      const h2 = this.textarea2Ref.value.style.height;
      if (!h1 && h2) {
        this.textarea1Ref.value.style.height = h2;
      }
      this.textarea2Ref.value.style.height = '';
    }
  }

  @boundMethod
  public handleMousedownOutput() {
    if (
      this.textarea1Ref.value &&
      this.textarea2Ref.value &&
      this.containerRef.value
    ) {
      const computedStyle = window.getComputedStyle(this.containerRef.value);
      if (computedStyle.getPropertyValue('flex-direction') === 'column') {
        return;
      }
      const h1 = this.textarea1Ref.value.style.height;
      const h2 = this.textarea2Ref.value.style.height;
      if (h1 && !h2) {
        this.textarea2Ref.value.style.height = h1;
      }
      this.textarea1Ref.value.style.height = '';
    }
  }
}
