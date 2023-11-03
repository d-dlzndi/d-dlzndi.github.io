export function getRelativeCoordinates(
  event: React.TouchEvent | React.MouseEvent,
  referenceElement: any
) {
  const t = event as React.TouchEvent;
  const m = event as React.MouseEvent;
  const position = {
    x: m.pageX || t.touches?.item(0).pageX,
    y: m.pageY || t.touches?.item(0).pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  const movement = {
    x: m.movementX,
    y: m.movementY,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    movementX: movement.x,
    movementY: movement.y,
    movementLength: Pythagorean(movement.x, movement.y),
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

function Pythagorean(a: number, b: number) {
  return Math.sqrt(a * a + b * b);
}
