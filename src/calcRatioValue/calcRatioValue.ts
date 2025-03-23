import { CalcRatioValueOptions } from './types';

/**
 * 割合に応じた値を返す
 * @param value テンプレート
 * @param ratio 割合
 * @param options オプション
 * @returns
 */
export default function calcRatioValue(value: number, ratio: number, options: CalcRatioValueOptions = {}): number {
  const { initialValue = 0 } = options;
const    diff = value - initialValue;
const    currentDiff = diff * ratio;
  return initialValue + currentDiff;
}
