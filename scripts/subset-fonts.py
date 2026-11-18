"""롯데마트 드림체 서브셋 생성 스크립트

원본 폰트(weight당 1MB 이상)에서 사이트에서 쓸 글자만 남겨 src/assets/fonts/에 저장한다.
남기는 글자: ASCII, KS X 1001 한글 2,350자(일상적으로 쓰는 음절), 자주 쓰는 기호.
서브셋에 없는 글자는 브라우저가 폴백 폰트(common.css의 font-family 목록)로 표시한다.

사용법:
    pip install fonttools brotli
    python scripts/subset-fonts.py <원본 woff2가 있는 폴더>

원본 파일명: LotteMartDreamMedium.woff2, LotteMartDreamBold.woff2
(https://cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/)
"""
import sys
from pathlib import Path

from fontTools import subset

WEIGHTS = {"Medium": "400", "Bold": "700"}
EXTRA = "·…“”‘’→←↑↓※○●□■◇◆★☆♥♡"


def ks_x_1001_hangul():
    """KS X 1001에 포함된 한글 음절 2,350자"""
    chars = []
    for lead in range(0xB0, 0xC9):
        for trail in range(0xA1, 0xFF):
            try:
                chars.append(bytes([lead, trail]).decode("euc_kr"))
            except UnicodeDecodeError:
                pass
    return "".join(chars)


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    source_dir = Path(sys.argv[1])
    out_dir = Path(__file__).resolve().parent.parent / "src" / "assets" / "fonts"
    out_dir.mkdir(parents=True, exist_ok=True)

    text = "".join(chr(c) for c in range(0x20, 0x7F)) + ks_x_1001_hangul() + EXTRA

    for name in WEIGHTS:
        source = source_dir / f"LotteMartDream{name}.woff2"
        target = out_dir / f"LotteMartDream-{name}.subset.woff2"
        options = subset.Options()
        options.flavor = "woff2"
        options.layout_features = ["*"]
        font = subset.load_font(str(source), options)
        subsetter = subset.Subsetter(options)
        subsetter.populate(text=text)
        subsetter.subset(font)
        subset.save_font(font, str(target), options)
        print(f"{target.name}: {source.stat().st_size // 1024}KB -> {target.stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
