export async function toFetchBody(iterable: AsyncIterable<Uint8Array>) {
  /*
  unfortunately, today browsers don't really support streaming uploads yet!
  This will change in the future.
  */
  const collected = new Array<number>();
  for await (const chunk of iterable) {
    collected.push(...chunk);
  }

  return Uint8Array.from(collected).buffer;
}

export async function* fromFetchBody(
  stream: ReadableStream<Uint8Array>,
): AsyncIterable<Uint8Array> {
  /*
  read a readable stream as an AsyncIterable<Uint8Array>
  */
  const reader = stream.getReader();
  try {
    let result = await reader.read();
    while (!result.done) {
      yield result.value;
      result = await reader.read();
    }
  } finally {
    reader.releaseLock();
  }
}
