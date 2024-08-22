import { Commit } from '@octokit/graphql-schema'

export function isCommit(obj: any): obj is Commit {
  return (
    obj && 'oid' in obj && 'tree' in obj && 'message' in obj && 'parents' in obj
  )
}
