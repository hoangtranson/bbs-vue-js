const FP = (() => {
  const compose = (...fns) => (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
  const curry = fn => {
    const arity = fn.length;
    return function $curry(...args) {
      if (args.length < arity) {
        return $curry.bind(null, ...args);
      }
      return fn.call(null, ...args);
    };
  };

  const trace = curry((tag, x) => {
    console.log(tag, x);
    return x;
  });
  const map = curry((fn, f) => f.map(fn));
  const eq = curry((a, b) => a === b);
  const concat = curry((a, b) => a.concat(b));
  const flip = curry((fn, a, b) => fn(b, a));
  const append = flip(concat);
  const prop = curry((p, obj) => obj[p]);

  const head = x => x[0];
  const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
  const reverse = reduce((acc, x) => [x].concat(acc), []);
  const last = compose(
    head,
    reverse
  );
  const join = curry((param, arr) => arr.join(param));
  return {
    compose,
    curry,
    trace,
    map,
    eq,
    concat,
    flip,
    append,
    prop,
    head,
    last,
    join
  };
})();

export default FP;
