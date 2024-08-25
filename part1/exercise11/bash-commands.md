```shell

-- Verify logs
kubectl logs <pod-name> -c pingpong
kubectl logs <pod-name> -c timestamp-generator
kubectl logs <pod-name> -c timestamp-with-pingpong-reader

kubectl exec -it <pod-name> -c <container> -- ls /usr/src/app/files
kubectl exec -it timestamp-log-with-pingpong-deploy-594657-zbl9c -c pingpong -- ls /usr/src/app/files
```