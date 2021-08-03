import { Tree } from '@nrwl/devkit';
import { TreeWriteOptions } from '@nrwl/tao/src/shared/tree';

export default async function (host: Tree, schema: any) {
	const writeOptions: TreeWriteOptions = { mode: '755' };


	host.write(`scripts/serve/index.bash`, 'echo "bash file"', writeOptions);
}
