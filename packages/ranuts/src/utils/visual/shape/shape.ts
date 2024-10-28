import type { ShapeType } from '@/utils/visual/enums';
import type { Point } from '@/utils/visual/vertex/point';
// 在这个渲染引擎中支持的所有几何图形都会继承自这个 Shape 基类，
// 这个基类会要求它的子类实现 type 属性和 contains 方法，
// type 属性是为了渲染的时候，引擎能识别要渲染哪种图形，contains 方法则是为了以后的碰撞检测做准备
export abstract class Shape {
  // 支持的所有几何图形都会继承自这个 Shape 基类
  public abstract type: ShapeType;
  constructor() {}
  // 碰撞检测
  public abstract contains(point: Point): boolean;
}
