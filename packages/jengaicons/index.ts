import fs from "fs";
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/lib/function";
import path from "path";

function getItemsInDir(dirPath: O.Option<string>): O.Option<Array<fs.Dirent>> {
  const _path = pipe(
    dirPath,
    O.getOrElse(() => "") // if dirPath is none, return empty string
  );

  return O.isSome(dirPath)
    ? O.some(fs.readdirSync(_path, { withFileTypes: true }))
    : O.none;
}

// filter out directories from the list of items in the assets directory
function filterOutDirectories(
  items: O.Option<Array<fs.Dirent>>
): O.Option<Array<fs.Dirent>> {
  return pipe(
    items,
    O.map((items) => items.filter((item) => item.isDirectory()))
  );
}

// get the first argument passed to the command
function getFirstArg(args: Array<string>): O.Option<string> {
  return args.length > 0 ? O.some(args[0]) : O.none;
}

async function main() {
  /**
   * command format
   * jengaicons <path-to-folders-with-svgs>
   */
  const args = process.argv.slice(2);

  const dirPath = getFirstArg(args);
  const getIconDirPath = (name: O.Option<string>): O.Option<string> => {
    const _name = pipe(
      name,
      O.getOrElse(() => "")
    );

    return O.isSome(name)
      ? pipe(
          dirPath,
          O.map((dir) => path.join(dir, _name))
        )
      : O.none;
  };

  const iconDirectories = pipe(dirPath, getItemsInDir, filterOutDirectories);

  const out = pipe(
    iconDirectories,
    O.map((dirs) => {
      return dirs.length > 0
        ? O.some(
            dirs.map((dir) => {
              const _dir = O.some(dir.name);
              const files = pipe(getIconDirPath(_dir), getItemsInDir);
              return files;
            })
          )
        : O.none;
    })
  );

  console.log({ out });
}

main().catch((e) => console.log(e.message));
