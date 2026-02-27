# PDP UI 组件化重构计划（基于 Figma `4547:85525`，非贴图实现）

## 概要
把当前 `app/(tabs)/index.tsx` 的“半贴图”页面重构为**可扩展的组件化 PDP 短页**，严格对齐 Figma 样式；移除系统 UI 大贴图依赖（状态栏/头栏/底部按钮整图），保留产品相关图片。  
本轮交付：短页 + 可扩展结构 + 轻交互（slider 可滑、规格可选高亮），不接业务逻辑。

## 目标与范围
1. 实现范围（已确认）：
- 先做短页（到底部 `ADD TO BAG` 固定区结束）
- 未来可扩展为长页（预留组件和数据结构）
2. 必须实现：
- 真实 UI（View/Text/Icon 组合），不使用系统栏/底部按钮整图贴图
- 产品图 `slider` 组件（首版 1 张真实图，但组件支持多图）
- Figma 风格对齐（颜色、间距、边框、圆角、字号、层级）
3. 明确不做（本轮）：
- `customise my hand string gift` 浮动 tab 交互（可先不实现）
- 收藏/分享/购物袋等业务行为
- 后端数据接入

## 实现方案（决策完成）

### 1) Figma 数据与素材流程（按 Skill）
1. 先执行 MCP 探针：`get_figma_data(fileKey, nodeId)`，目标节点 `4547:85525`。
2. 若继续 `429`：
- 用当前已下载素材 + 参考图继续实现 UI 主体（不阻塞）
- 在实现末尾追加一次对账步骤（限流恢复后再精调 token）
3. 素材策略：
- 保留产品相关素材：`pdp-product-kv.png`（及后续补充产品图）
- 删除系统 UI 贴图：`status-bar.png`、`header-bar.png`、`bottom-cta.png`、`home-indicator.png`

### 2) 页面架构改造
1. 把当前 `index.tsx` 拆成 PDP 组件树，页面仅做组装。
2. 目录新增：
- `components/pdp/PDPPage.tsx`
- `components/pdp/PDPHeader.tsx`
- `components/pdp/ProductImageSlider.tsx`
- `components/pdp/ProductInfoBlock.tsx`
- `components/pdp/BenefitRow.tsx`
- `components/pdp/VariantSelector.tsx`
- `components/pdp/PDPBottomBar.tsx`
- `components/pdp/pdp-tokens.ts`（颜色、间距、字号、半径）
- `components/pdp/types.ts`
3. `app/(tabs)/index.tsx` 只保留：
- 引入 `PDPPage`
- 提供静态 mock 数据（后续可切 API）

### 3) 组件设计（首版）
1. `PDPHeader`
- 真实头部布局（返回、分享、购物袋+角标）
- 不使用 header 整图
2. `ProductImageSlider`
- `FlatList` 横向 + `pagingEnabled` + 分页指示器
- 首版 `items` 仅 1 张 Figma 主图
- 组件内部支持多图数组，后续加图不改结构
3. `ProductInfoBlock`
- App Exclusive、标题、现价、划线价、折扣 tag
4. `BenefitRow`
- `money back` / `delivery` 信息行（真实 icon + 文本）
5. `VariantSelector`
- 尺寸项（16/17/18/19/20）
- 轻交互：可点选高亮，仅本地状态
6. `PDPBottomBar`
- 真实绘制底部容器与 `ADD TO BAG` 主按钮
- 固定在底部，适配安全区，不使用底部整图

### 4) 字体策略（已确认）
1. 本轮使用系统近似字体，不引入 Google 字体包。
2. 在 `pdp-tokens.ts` 预留字体映射键：
- `titleSerif`（未来映射 Orpheus）
- `bodySans`（未来映射 Europa）
3. 以后拿到目标字体文件时，仅替换 token，不改组件结构。

### 5) 路由与布局
1. 维持现有 `app/(tabs)` 路由结构（最小侵入）。
2. `Tabs` 继续隐藏系统 tabbar（已符合设计）。
3. 页面底部采用 `SafeAreaView` + 固定按钮区，避免被手势条遮挡。

## 对外接口/类型变更（重要）
1. 新增类型（`components/pdp/types.ts`）：
- `PdpImageItem`：`{ id: string; source: ImageSourcePropType }`
- `PdpVariantOption`：`{ id: string; label: string; enabled?: boolean }`
- `PdpProductViewModel`：页面聚合数据（标题、价格、折扣、图集、规格）
2. 新增组件接口：
- `ProductImageSliderProps`：`items`, `initialIndex?`, `onIndexChange?`
- `VariantSelectorProps`：`options`, `selectedId`, `onSelect`
- `PDPBottomBarProps`：`label`, `onPress?`, `disabled?`

## 验收与测试场景
1. 静态检查：
- `npm run lint` 通过
- 无未使用导入/死代码
2. 视觉验收（手工）：
- iPhone 宽度下与 `4547:85525` 对齐（层级、间距、字号、颜色）
- 顶部和底部不再依赖系统 UI 大贴图
3. 交互验收（手工）：
- 主图区域可横向滑动（即使当前只有 1 图，结构可用）
- 规格点击后高亮切换
- 底部 `ADD TO BAG` 固定且不遮挡内容
4. 回归验收：
- 启动无红屏
- 页面可滚动且底部安全区显示正常

## 默认假设与已锁定决策
1. 先做短页，结构可扩展。
2. `customise my hand string gift` 浮动 tab 本轮不实现。
3. Slider 首版使用当前 Figma 现有 1 张图，但组件支持多图。
4. 系统 UI 贴图按确认范围删除（status/header/bottom/home-indicator）。
5. 字体先系统近似，后续再替换品牌字体文件。
6. 若 MCP 持续 429，不阻塞主实现；限流恢复后补一次细节对账微调。
